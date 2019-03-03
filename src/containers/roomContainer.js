/* eslint-disable import/named */
/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchRooms, selectRoom, filterRooms, sortRooms
} from '../actions';

let searchTimeout;

class RoomContainer extends Component {
  state = {
    text: ''
  }

  componentDidMount() {
    this.props.fetchRooms();
  }

  selectRoom = (item) => {
    this.props.selectRoom(item);
  }

  filterHandleChange = (text) => {
    this.setState({ text }, () => {
      if (searchTimeout !== undefined) clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        this.props.filterRooms(text);
      }, 300);
    });
  }

  sortRooms = (type, direction) => {
    const { rooms } = this.props;
    let sortedRooms;
    if (type === 'price') {
      if (direction === 'asc') {
        sortedRooms = [...rooms].sort((a, b) => a.prices_attributes[0].price - b.prices_attributes[0].price);
      } else if (direction === 'desc') {
        sortedRooms = [...rooms].sort((a, b) => b.prices_attributes[0].price - a.prices_attributes[0].price);
      }
    }
    this.props.sortRooms(sortedRooms);
  }

  getStateAndHelpers() {
    return {
      rooms: this.props.rooms,
      loading: this.props.loading,
      selectRoom: this.selectRoom,
      selectedRoom: this.props.selectedRoom,
      filterText: this.state.text,
      filterHandleChange: this.filterHandleChange,
      sortRooms: this.sortRooms,
      error: this.props.error,
      errorMessage: this.props.errorMessage
    };
  }

  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}

const mapStateToProps = state => ({
  rooms: state.room.items,
  loading: state.loader.loading,
  selectedRoom: state.room.selectedItem,
  error: state.error.error,
  errorMessage: state.error.message
});

export default connect(mapStateToProps, {
  fetchRooms, selectRoom, filterRooms, sortRooms
})(RoomContainer);
