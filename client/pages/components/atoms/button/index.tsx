import { Wrapper } from "./style";

type ButtonProps = {
    text: string;
    onClick: () => void;
}

export const Button = ({text, onClick}: ButtonProps) => {
    return(
        <Wrapper onClick={() => onClick()}>{text}</Wrapper>
    )
}
