import styled from "styled-components";
import { Button } from "../../atoms/button";
import { StyledTextarea, TitleText } from "../../molecules/input/style";

export const Wrapper = styled.div`
    display: grid;
    gap: 50px;
`
export const FormWrapper = styled.div`
    display: grid;
    justify-items: center;
    background-color: #92A6DA;
    border-radius: 12px;
    padding: 20px 30px;
    width: 300px;
    ${TitleText} {
       margin-top: 20px;
    }
    ${StyledTextarea} {
        margin-bottom: 20px;
    }
`
