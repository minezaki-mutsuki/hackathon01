import { ContentsText, TitleText, Wrapper } from "./style";

type DetailProps = {
    title: string;
    contents: string;
}

export const Detail = ({title, contents}: DetailProps) => {
    return(
        <Wrapper>
            <TitleText>{title}</TitleText>
            <ContentsText>{contents}</ContentsText>
        </Wrapper>
    )
}
