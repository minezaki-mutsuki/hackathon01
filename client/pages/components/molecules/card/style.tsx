import styled from "styled-components";

export const Wrapper = styled.div<{isQestion: boolean}>`
    background-color: #CED5FA;
    padding: 20px 30px;
    width: 400px;
    border-radius: 12px;
    transition: ease 0.2s;
    ${({isQestion}) => isQestion && "cursor: pointer;"}
    &:hover{
        background-color: ${({isQestion}) => isQestion && "#BCC5F4"};
    }
`
export const UserWrapper = styled.div`
    display: flex;
    gap: 10px;
    font-weight: 700;
`
export const UserName = styled.p`
    color: white;
    font-size: 16px;
    font-weight: 400;
    margin: 0;
`
export const MainText = styled.p`
    color: #2A325C;
    font-size: 20px;
    font-weight: 700;
    margin: 0;
`
export const IconWrapper = styled.div`
    cursor: pointer;
`
