/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  overflow: auto;
  margin: auto;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

ContainerWrapper.displayName = 'Container';
