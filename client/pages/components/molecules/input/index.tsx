import { forwardRef } from "react";
import { StyledInput, StyledTextarea, TitleText } from "./style";

type InputProps = {
    title?: string;
    isRegister: boolean;
    placeholder?: string;
    height?: number;
    isInput: boolean;
    formtype?: string;
}


// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement&HTMLTextAreaElement, InputProps>(
    ({title, isRegister, placeholder, height, isInput, formtype}: InputProps, ref) => {
        return(
        <>
            {title &&  <TitleText isRegister={isRegister}>{title}</TitleText>}
            {isInput ? (<StyledInput type={formtype} isRegister={isRegister} placeholder={placeholder} ref={ref} />) : (height) ? (<StyledTextarea height={height} ref={ref} />) : ""}
        </>
        )
    }
)
