/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { InputGroupWrapper, InputLabelWrapper, InputControlWrapper } from './style';

export const InputGroup = ({
  title, name, value, onChange, type, placeholder
}) => (
  <InputGroupWrapper>
    <InputLabelWrapper>{title}</InputLabelWrapper>
    <InputControlWrapper
      text={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  </InputGroupWrapper>
);
