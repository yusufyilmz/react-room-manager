/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { Fragment } from 'react';
import { RadioGroupWrapper, RadioLabelWrapper, RadioControlWrapper } from './style';
import { Icon } from '../Icon';

export const RadioGroup = ({
  title, value, group, onChange, options
}) => (
  <RadioGroupWrapper>
    <RadioLabelWrapper>{title}</RadioLabelWrapper>

    {options.map(option => (
      <Fragment
        key={`radio${option}`}
      >
        <RadioControlWrapper
          type="radio"
          value={option}
          checked={value === option}
          onChange={() => onChange(option)}
        />
        <Icon
          group={group}
          id={option}
        />
      </Fragment>
    ))}
  </RadioGroupWrapper>
);
