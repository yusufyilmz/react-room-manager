/* eslint-disable react/prop-types */
import React from 'react';
import {
  RoomCardItemWrapper, RoomCardHeaderWrapper, RoomCardImgWrapper, RoomCardTextWrapper, RoomCardBodyWrapper
} from './style';

// Picture
// - Country and city
// - Price
// - Available from
// - Active
export const RoomCard = ({ item, onClick }) => (
  <RoomCardItemWrapper onClick={() => onClick(item)}>
    <RoomCardImgWrapper
      alt={item.picture}
      src={item.picture}
    />
    <RoomCardBodyWrapper>
      <RoomCardHeaderWrapper>
        {item.country}
        {' '}
        -
        {' '}
        {item.city}
      </RoomCardHeaderWrapper>
      <RoomCardTextWrapper>
        Available from:
      </RoomCardTextWrapper>
      <RoomCardTextWrapper>
        {item.available_from}
      </RoomCardTextWrapper>
      {/* <RoomCardTextWrapper>
      Available from:
        {' '}
        {item.available_from}
      </RoomCardTextWrapper> */}
    </RoomCardBodyWrapper>
  </RoomCardItemWrapper>
);
export default RoomCard;
