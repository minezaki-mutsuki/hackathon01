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


export const Input = forwardRef<HTMLInputElement&HTMLTextAreaElement, InputProps>(
    function Input ({title, isRegister, placeholder, height, isInput, formtype, ...rest}: InputProps, ref)  {
        return(
        <>
            {title &&  <TitleText isRegister={isRegister}>{title}</TitleText>}
            {isInput ? (<StyledInput type={formtype} isRegister={isRegister} placeholder={placeholder} ref={ref} {...rest} />) : (height) ? (<StyledTextarea height={height} ref={ref} {...rest} />) : ""}
        </>
        )
    }
)
