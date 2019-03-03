/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { RoomCard } from '../index';
import data from '../../../../db.json';

describe('ROOMCARD COMPONENT', () => {
  let wrapper; let
    props;

  beforeEach(() => {
    props = {
      item: data.rooms[0],
      onClick: jest.fn()
    };

    wrapper = shallow(
      <RoomCard {...props} />
    );
  });

  test('renders element correctly', () => {
    expect(wrapper.find('RoomCardItemWrapper').length).toBe(1);
  });

  test('renders element correctly', () => {
    expect(wrapper.find('RoomCardTextWrapper').length).toBe(2);
  });

  test('renders element correctly', () => {
    expect(wrapper.find('RoomCardHeaderWrapper').length).toBe(1);
  });

  test('renders props correctly', () => {
    expect(wrapper.find('RoomCardImgWrapper').at(0).prop('src')).toEqual(props.item.picture);
  });

  test('renders text correctly', () => {
    expect(wrapper.find('RoomCardHeaderWrapper').text()).toEqual(`${props.item.country} - ${props.item.city}`);
  });

  test('renders text correctly', () => {
    expect(wrapper.find('RoomCardTextWrapper').at(1).text()).toEqual(props.item.available_from);
  });

  test('snapchat correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
