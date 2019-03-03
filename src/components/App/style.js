/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  overflow: auto;
  margin: auto;
  // display: flex;
  // flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  // justify-content: space-around;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

ContainerWrapper.displayName = 'Container';
