/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { HeaderWrapper } from './style';

export const Header = ({ title, description }) => (
  <HeaderWrapper>
    <h1>{title}</h1>
    <p>{description}</p>
  </HeaderWrapper>
);
