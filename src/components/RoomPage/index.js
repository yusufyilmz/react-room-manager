/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { Fragment } from 'react';
import RoomContainer from '../../containers/roomContainer';
import ErrorHandler from '../Error';
import { RoomCard } from '../RoomCard';
import { RoomSort } from '../RoomSort';
import { RoomFilter } from '../RoomFilter';
import { RoomPageListWrapper, RoomPageButtonsWrapper } from './style';

export const RoomPage = () => (
  <RoomContainer>
    {
      props => (
        !props.loading && !props.selectedRoom && (
          <ErrorHandler error={props.error} errorMessage={props.errorMessage}>
            <RoomPageButtonsWrapper>
              <RoomSort
                sortRooms={props.sortRooms}
                fetchRooms={props.fetchRooms}
              />
              <RoomFilter
                text={props.filterText}
                handleChange={props.filterHandleChange}
              />
            </RoomPageButtonsWrapper>
            <RoomPageListWrapper>
              {props.rooms.map(room => (
                <RoomCard
                  onClick={props.selectRoom}
                  key={room.id}
                  item={room}
                />
              ))}
            </RoomPageListWrapper>
          </ErrorHandler>
        )
      )
    }
  </RoomContainer>
);
