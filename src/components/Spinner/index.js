/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ClipLoader } from 'react-spinners';
import LoaderContainer from '../../containers/loaderContainer';

export const Spinner = () => (
  <LoaderContainer>
    {
                props => (
                  <div>
                    <ClipLoader
                      sizeUnit="px"
                      size={100}
                      color="#123abc"
                      loading={props.loading}
                    />
                  </div>
                )
            }
  </LoaderContainer>
);
