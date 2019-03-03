/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ButtonWrapper } from './style';

export const Button = ({ text, onClick, float }) => (
  <ButtonWrapper float={float} onClick={onClick} type="button">
    {text}
  </ButtonWrapper>
);
