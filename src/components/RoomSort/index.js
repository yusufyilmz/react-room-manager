/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { DropdownToggleWrapper, DropdownWrapper } from './style';


export const RoomSort = ({ sortRooms }) => (
  <DropdownWrapper>
    <DropdownToggleWrapper variant="success" id="dropdown-basic">
                Sort
    </DropdownToggleWrapper>
    <Dropdown.Menu>
      <Dropdown.Item onClick={() => sortRooms('price', 'asc')} eventKey="1">Sort by Price Ascending </Dropdown.Item>
      <Dropdown.Item onClick={() => sortRooms('price', 'desc')} eventKey="1">Sort by Price Descending </Dropdown.Item>
    </Dropdown.Menu>
  </DropdownWrapper>
);
