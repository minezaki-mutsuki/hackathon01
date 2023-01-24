import { ExampleText } from "./style";

type ExampleProps = {
    text: string;
}

export const Example = ({text}: ExampleProps) => {
    return(
        <ExampleText>{text}</ExampleText>
    )
}
