import React from 'react';
import { RoomPage } from '../RoomPage';
import { ContainerWrapper } from './style';
import { Spinner } from '../Spinner';
import { RoomEditPage } from '../RoomEditPage';
import { GlobalStyles } from '../../constants/globalStyles';

export const App = () => (
  <ContainerWrapper>
    <GlobalStyles />
    <Spinner />
    <RoomPage />
    <RoomEditPage />
  </ContainerWrapper>
);

export default App;
