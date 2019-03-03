


import styled from 'styled-components';
// import { Button} from 'react-bootstrap'


const Button = styled.button`
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;


export const ButtonWrapper = styled(Button)`
    margin-left: ${props => props.left}px;
    margin-bottom: ${props => props.bottom}px;
    width: ${props => props.width}px;
    float: ${props => props.float};
`;

export const InputButtonWrapper = styled(Button)`
    float:right;
`;


export const InputWrapper = styled.form`
    display: block;
    margin-top: 0em;;
`;

export const InputGroupWrapper = styled.div`
    margin-bottom: 1rem;
    &::after, &::before {
        box-sizing: border-box;
    }
`;

export const InputLabelWrapper = styled.label`
    display: inline-block;
    margin-bottom: .5rem;
    &::after, &::before {
        box-sizing: border-box;
    }
`;


export const InputControlWrapper = styled.input`
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &::after, &::before {
            box-sizing: border-box;
        }
`;

export const RadioGroupWrapper = styled.div`
    margin-bottom: 1rem;
    &::after, &::before {
        box-sizing: border-box;
    }
`;

export const RadioLabelWrapper = styled.label`
    display: inline-block;
    margin-bottom: .5rem;
    &::after, &::before {
        box-sizing: border-box;
    }
`;


export const RadioControlWrapper = styled.input`
    height: calc(2.25rem + 2px);
    margin: 30px;
    line-height: 1.5;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &::after, &::before {
            box-sizing: border-box;
        }
`;