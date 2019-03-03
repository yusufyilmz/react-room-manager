/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import SingleBed from '../assets/bedtype/1-single.svg';
import DoubleBed from '../assets/bedtype/2-double.svg';
import AirConditioner from '../assets/amenities/1-air-conditioner.svg'
import Elevator from '../assets/amenities/2-elevator.svg';
import Heating from '../assets/amenities/3-heating.svg';
import Parking from '../assets/amenities/4-parking.svg';
import Tv from '../assets/amenities/5-tv.svg';
import WashingMachine from '../assets/amenities/6-washingmachine.svg';
import Wifi from '../assets/amenities/7-wifi.svg';

export function getIcon(group, id) {
  if (group === 'bed') {
    switch (id) {
      case 1:
        return SingleBed;
      case 2:
        return DoubleBed;
      default:
        break;
    }
  } else if (group === 'amenities') {
    switch (id) {
      case 1:
        return AirConditioner;
      case 2:
        return Elevator;
      case 3:
        return Heating;
      case 4:
        return Parking;
      case 5:
        return Tv;
      case 6:
        return WashingMachine;
      case 7:
        return Wifi;
      default:
        break;
    }
  }
}
