/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { Fragment } from 'react';
import RoomEditContainer from '../../containers/roomEditContainer';
import { Button } from '../Elements/button';
import { RoomLocation } from '../RoomLocation';
import { RoomDatePrice } from '../RoomDatePrice';
import { RoomContent } from '../RoomContent';
import {
  RoomEditContainerWrapper, RoomEditFormWrapper
} from './style';

export const RoomEditPage = () => (
  <RoomEditContainer
    operation="edit"
  >
    {
      props => (
        <Fragment>
          {(!props.loading && !props.error && props.selectedRoom !== null)
            && (
              <RoomEditContainerWrapper>
                <RoomEditFormWrapper onSubmit={props.submitForm}>
                  {props.step === 1
                    && (
                      <RoomLocation
                        city={props.selectedRoom.city}
                        address={props.selectedRoom.address}
                        handleChange={props.handleChange}
                        onSubmit={props.onChangeStep}
                      />
                    )
                  }
                  {props.step === 2
                    && (
                      <RoomDatePrice
                        date={props.selectedRoom.available_from}
                        priceAttributes={props.selectedRoom.prices_attributes}
                        handleChange={props.handleChange}
                        handleRadioChange={props.handleRadioChange}
                        onSubmit={props.onChangeStep}
                      />
                    )
                  }
                  {props.step === 3
                    && (
                      <RoomContent
                        description={props.selectedRoom.description}
                        amenities={props.selectedRoom.amenities_attributes}
                        min_days={props.selectedRoom.min_days}
                        bed_type={props.selectedRoom.bed_type}
                        handleChange={props.handleChange}
                        handleCheckChange={props.handleCheckChange}
                        onSubmit={props.onChangeStep}
                      />
                    )
                  }
                  <Button
                    text="Previous"
                    float="left"
                    onClick={() => props.onChangeStep(-1)}
                  />
                  <Button
                    text="Next"
                    float="right"
                    onClick={() => props.onChangeStep(1)}
                  />
                </RoomEditFormWrapper>
              </RoomEditContainerWrapper>
            )
          }
        </Fragment>
      )
    }
  </RoomEditContainer>
);
