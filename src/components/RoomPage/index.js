/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import RoomContainer from '../../containers/roomContainer';
import { RoomCard } from '../RoomCard';
import { RoomListWrapper } from './style';

export const RoomPage = () => (
  <RoomContainer>
    {
      props => (
        !props.loading && (
          <RoomListWrapper>
            {props.rooms.map(room => (
              <RoomCard
                key={room.id}
                item={room}
              />
            ))}
          </RoomListWrapper>
        )
      )
    }
  </RoomContainer>
);
