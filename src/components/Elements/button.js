import React from 'react';
import {ButtonWrapper} from './style';
// import {Popup} from '../Popup';

export const Button = ({ text, onClick, float }) => {
    return <ButtonWrapper float={float} onClick={onClick}  type="button">
        {text}
        {/* <Popup show={showPopup} message={message}/> */}
    </ButtonWrapper>
}





