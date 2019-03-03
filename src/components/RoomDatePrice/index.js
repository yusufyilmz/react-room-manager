/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { Fragment } from 'react';
import { InputGroup } from '../Elements/inputGroup';
import { Header } from '../Header';

export const RoomDatePrice = ({ date, priceAttributes, handleChange, handleRadioChange }) => (
  <Fragment>
    <Header title="Room Content" description=""/>
    <InputGroup
      title="Room date"
      id="editRoomDateField"
      type="date"
      value={date}
      onChange={e => handleChange('available_from', e.target.value)}
    />
    <InputGroup
      title={`Room price in ${priceAttributes[0].currency} ${priceAttributes[0].price_type}`}
      id="editRoomPriceField"
      type="number"
      value={priceAttributes[0].price}
      onChange={e => handleRadioChange(e.target.value)}
    />
  </Fragment>
);
