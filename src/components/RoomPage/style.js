/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const RoomListWrapper = styled.ul`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-inline-start: 10px;
`;

RoomListWrapper.displayName = 'RoomListWrapper';