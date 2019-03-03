/* eslint-disable react/prop-types */
import React from 'react';
import { ErrorWrapper } from './style';


const withError = WrappedComponent => ({ error, errorMessage, children }) => (
  <WrappedComponent>
    {error && <ErrorWrapper>{errorMessage}</ErrorWrapper>}
    {children}
  </WrappedComponent>
);

const ErrorHandler = withError(({ children }) => <div>{children}</div>);

export default ErrorHandler;
