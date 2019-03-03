/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React, { Fragment } from 'react';
import { RadioGroupWrapper, RadioLabelWrapper, RadioControlWrapper } from './style';
import { Icon } from '../Icon';

export const CheckBox = ({
  title, values, group, onChange, options
}) => (
  <RadioGroupWrapper>
    <RadioLabelWrapper>{title}</RadioLabelWrapper>

    {options.map(option => (
      <Fragment
        key={`check${option}`}
      >
        <RadioControlWrapper
          type="checkbox"
          key={option}
          checked={!!values.find(x => x.amenity_type === option)}
          onChange={e => onChange(option, e.target.checked)}
        />
        <Icon
          group={group}
          id={option}
        />
      </Fragment>
    ))}
  </RadioGroupWrapper>
);
