import { forwardRef } from "react";
import { StyledInput, StyledTextarea, TitleText } from "./style";

type InputProps = {
    title?: string;
    isRegister: boolean;
    placeholder?: string;
    height?: number;
    isInput: boolean;
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement&HTMLTextAreaElement, InputProps>(
    ({title, isRegister, placeholder, height, isInput}: InputProps, ref) => {
        return(
        <>
            {title &&  <TitleText isRegister={isRegister}>{title}</TitleText>}
            {isInput ? (<StyledInput isRegister={isRegister} placeholder={placeholder} ref={ref} />) : (height) ? (<StyledTextarea height={height} ref={ref} />) : ""}
        </>
        )
    }
)
