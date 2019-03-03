/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { Fragment } from 'react';
import { InputGroup } from '../Elements/inputGroup';
import { RadioGroup } from '../Elements/RadioGroup';
import { Beds, Amenities } from '../../constants/properties';
import { CheckBox } from '../Elements/checkBox';

export const RoomContent = ({
  description, bed_type, min_days, amenities, handleChange, handleCheckChange
}) => (
  <Fragment>
    <InputGroup
      title="Room description"
      type="text"
      value={description}
      onChange={e => handleChange('description', e.target.value)}
    />
    <InputGroup
      title="Room min days"
      type="number"
      value={min_days}
      onChange={e => handleChange('min_days', e.target.value)}
    />
    <RadioGroup
      title="Beds"
      onChange={e => handleChange('bed_type', e)}
      value={bed_type}
      options={Beds}
      group="bed"
    />
    <CheckBox
      title="Amenities"
      onChange={handleCheckChange}
      values={amenities}
      options={Amenities}
      group="amenities"
    />
  </Fragment>
);
