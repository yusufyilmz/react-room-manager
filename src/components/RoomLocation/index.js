/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { Fragment } from 'react';
// import { Form, Container } from 'react-bootstrap';
import { InputGroup } from '../Elements/inputGroup';
// import { Button } from '../Elements/button';

// import { FormSelect } from '../Elements/formSelect';
// import { LinkButton } from '../Elements/linkButton';
// import {
//   RoomEditLocationPageContainerWrapper
// } from './style';
// import { FormWrapper } from '../Elements/style';


export const RoomLocation = ({ city, address, handleChange, onSubmit }) => (
  <Fragment>
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
