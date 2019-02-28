import styled from 'styled-components';


export const RoomCardItemWrapper = styled.li`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    flex: 0 0 25%;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    margin: 10px;
    justify-content: space-around;
    height: 300px;
    padding: 5px;
    @media (max-width: 768px) {
        flex: 0 0 40%;
        margin: 5px;
        height: 200px;
    }
`;

RoomCardItemWrapper.displayName = 'RoomCardItemWrapper';

export const RoomCardImgWrapper = styled.img`
    vertical-align: middle;
    border-style: none;
    width: 100%;
    display: block;
    height: 60%
    @media (max-width: 768px) {
        height: 50%;
    }
`;

RoomCardImgWrapper.displayName = 'RoomCardImgWrapper';

export const RoomCardBodyWrapper = styled.div`
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
`;

RoomCardBodyWrapper.displayName = 'RoomCardImgWrapper';


export const RoomCardHeaderWrapper = styled.h5`
    margin-left: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 10px;
    margin: 0px;
    overflow: auto;
    text-align: center;
    font-size: 14px;
`;


RoomCardHeaderWrapper.displayName = 'RoomCardHeaderWrapper';

export const RoomCardTextWrapper = styled.p`
    text-align: center;
    margin: 0 0 10px
    padding: 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
 `;

RoomCardTextWrapper.displayName = 'RoomCardTextWrapper';
