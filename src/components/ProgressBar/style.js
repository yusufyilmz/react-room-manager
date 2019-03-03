/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ProgressBarWrapper = styled.div`
    position: relative;
    height: 20px;
    width: 70%;
    border-radius: 50px;
    border: 1px solid #333;
    margin-top:80px;
    margin-right: auto;
    margin-left: auto;
`;

export const FillerWrapper = styled.div`
    height: 100%;
    border-radius: inherit;
    background: #007bff;
    transition: width .2s ease-in;
    width: ${props => props.percentage}%;
`;