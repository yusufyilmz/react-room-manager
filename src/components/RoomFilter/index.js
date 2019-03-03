/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { InputGroup } from '../Elements/inputGroup';
import { RoomFilterWrapper } from './style';

export const RoomFilter = ({ text, handleChange }) => (
  <RoomFilterWrapper>
    <InputGroup
      type="text"
      placeholder="Filter room cities..."
      text={text}
      value={text}
      onChange={e => handleChange(e.target.value)}
    />
  </RoomFilterWrapper>
);
