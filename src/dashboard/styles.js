import styled from 'styled-components';
import GiftImg from '../assets/img/complete.jpg';

export const PaddingDiv = styled.div`
    padding: 0.5em
`

export const Label = styled.div`
    text-align: left;
    width: 60%;
    margin: auto;
`

export const GiftCard = styled.div`
    background-image: url(${GiftImg});
    background-size: 100% 100%;
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
`

export const GiftTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    font-size: 45px;
    font-family: Brush Script MT, Brush Script Std, cursive;
    color: rgb(242, 34, 75);
`

export const GiftIndexs = styled.div`
    width: 48%;
    padding: 0 1%;
    font-weight: 500;
    font-family: 'Pacifico', cursive;
`

export const GiftPart = styled.div`
    width: 50%;
`

export const GiftIndex = styled.div`
    border-bottom: 2px solid #000;
    text-align: left;
    margin: 15px 0;
    font-size: 16px;
    display: flex;
`

export const SubHeading = styled.h2``

export const SaveButton = styled.button`
    background: palevioletred;
    color: white;
    border: 2px solid palevioletred;
    border-radius: 3px;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
`