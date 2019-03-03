/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { Fragment } from 'react';
import { InputGroup } from '../Elements/inputGroup';
import { Header } from '../Header';

export const RoomLocation = ({ city, address, handleChange }) => (
  <Fragment>
    <Header title="Room Location" description=""/>
    <InputGroup
      title="Room city"
      id="editRoomCityField"
      type="text"
      value={city}
      onChange={e => handleChange('city', e.target.value)}
    />
    <InputGroup
      title="Room address"
      id="createBookPriceField"
      type="text"
      value={address}
      onChange={e => handleChange('address', e.target.value)}
    />
  </Fragment>
);
