import React from 'react';
import { Container } from 'react-bootstrap';
import { createGlobalStyle } from "styled-components";
import { RoomPage } from '../RoomPage';
import { ContainerWrapper } from './style';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.428571429;
    color: #333;
    background-color: #fff;
  }
`;

export const App = () => (
  <ContainerWrapper>
    <GlobalStyles />
    <RoomPage />
  </ContainerWrapper>
);

export default App;
