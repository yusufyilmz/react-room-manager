/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { getIcon } from '../../constants/icons';

export const Icon = ({ group, id }) => <img src={getIcon(group, id)} />;

