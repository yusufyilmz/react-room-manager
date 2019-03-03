/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ProgressBarWrapper, FillerWrapper } from './style';

export const ProgressBar = ({
  percentage
}) => (
  <ProgressBarWrapper>
    <FillerWrapper percentage={percentage} />
  </ProgressBarWrapper>
);
