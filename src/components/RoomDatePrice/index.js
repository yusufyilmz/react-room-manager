/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { Fragment } from 'react';
// import { Form, Container } from 'react-bootstrap';
import { InputGroup } from '../Elements/inputGroup';
// import { Button } from '../Elements/button';

// import { FormSelect } from '../Elements/formSelect';
// import { LinkButton } from '../Elements/linkButton';
import { Button } from '../Elements/button';
// import {
//   RoomEditLocationPageContainerWrapper
// } from './style';
// import { FormWrapper } from '../Elements/style';


export const RoomDatePrice = ({ date, priceAttributes, handleChange, handleRadioChange }) => (
  <Fragment>
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
    {/* <FormSelect
                                        title="Book Genre"
                                        id="createBookGenreField"
                                        options={props.genres}
                                        value={props.genre}
                                        onChange={(e) => props.handleChange('genre', e)}
                                    /> */}
    
  </Fragment>
);
