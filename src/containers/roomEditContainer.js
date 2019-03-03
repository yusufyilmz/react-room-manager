/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import { Component } from 'react';
import { connect } from 'react-redux';
import { editRoom, backToRoomPage } from '../actions';

class RoomEditContainer extends Component {
  state = {
    selectedRoom: null,
    step: 1
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedRoom !== this.props.selectedRoom) {
      this.setState({
        selectedRoom: this.props.selectedRoom,
        step: 1
      });
    }
  }

  onChange = (key, value) => {
    this.setState(prevState => ({
      selectedRoom: { ...prevState.selectedRoom, [key]: value }
    }));
  }

  onRadioChange = (value) => {
    console.log(this.state);
    this.setState(prevState => ({
      selectedRoom: { ...prevState.selectedRoom, prices_attributes: [{ ...prevState.selectedRoom.prices_attributes[0], price: value }] }
    }));
  }

  onChangeStep = (value) => {
    this.setState(prevState => ({
      step: prevState.step + value
    }), () => {
      if (this.state.step > 3) {
        this.props.editRoom(this.state.selectedRoom);
      }
    });
  }

  onCheckChange = (value, checked) => {
    if (checked) {
      this.setState(prevState => ({
        selectedRoom: { ...prevState.selectedRoom, amenities_attributes: [...prevState.selectedRoom.amenities_attributes, { amenity_type: value }] }
      }));
    } else {
      this.setState(prevState => ({
        selectedRoom: { ...prevState.selectedRoom, amenities_attributes: prevState.selectedRoom.amenities_attributes.filter(x => x.amenity_type !== value) }
      }));
    }
  }

  getStateAndHelpers() {
    return {
      loading: this.props.loading,
      handleChange: this.onChange,
      handleCheckChange: this.onCheckChange,
      handleRadioChange: this.onRadioChange,
      selectedRoom: this.state.selectedRoom,
      step: this.state.step,
      onChangeStep: this.onChangeStep,

    };
  }


  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}


const mapStateToProps = state => ({
  loading: state.loader.loading,
  selectedRoom: state.room.selectedItem
});

export default connect(mapStateToProps, { editRoom, backToRoomPage })(RoomEditContainer);
