/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { Fragment } from 'react';
import { InputGroup } from '../Elements/inputGroup';
import  {RoomFilterWrapper} from './style';

export const RoomFilter = ({ text, handleChange }) => (
  <RoomFilterWrapper>
    <InputGroup
      type="text"
      placeholder="Filter Issues with city, addres, country or description"
      text={text}
      value={text}
      onChange={e => handleChange(e.target.value)}
    />
  </RoomFilterWrapper>
);
