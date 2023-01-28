import styled, { css } from "styled-components";

export const TitleText = styled.h3<{isRegister: boolean}>`
    ${({isRegister}) => isRegister ? css`
        font-size: 20px;
    ` : css`
        font-size: 16px;
        font-weight: 400;
        color: white;
    `};
    margin: 0;
    margin-bottom: 10px;
`
export const StyledInput = styled.input<{isRegister: boolean}>`
    border: none;
    border-radius: 50px;
    ${({isRegister}) => isRegister ? css`
        background-color: #CED5FA;
        width: 300px;
        padding: 15px 25px;
        font-size: 16px;
    ` : css`
        padding: 10px 20px;
        width: 200px;
        background-color: white;
    `};
    &::placeholder{
        color: #9D6FFF;
    }
    &:focus-visible {
        outline: none;
    }
`
export const StyledTextarea = styled.textarea<{height: number}>`
    padding: 10px 20px;
    border-radius: 12px;
    height: ${({height}) => height}px;
    resize: none;
    border: none;
    background-color: white;
    &:focus-visible {
        outline: none;
    }
`
