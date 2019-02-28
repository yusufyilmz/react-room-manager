/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRooms } from '../actions';

class RoomContainer extends Component {
  componentDidMount() {
    this.props.fetchRooms();
  }

  getStateAndHelpers() {
    return {
      rooms: this.props.rooms,
      loading: this.props.loading,
    };
  }

  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}


const mapStateToProps = state => ({
  rooms: state.room.items,
  loading: state.loader.loading,
});

export default connect(mapStateToProps, { fetchRooms })(RoomContainer);
