import { PointNumber, PointText, PointWrapper, UserName, Wrapper } from "./style";

type UserProps = {
    userName: string;
    point: number;
}

export const User = ({userName, point}: UserProps) => {
    return(
        <Wrapper>
            <UserName>{userName}</UserName>
            <PointWrapper>
                <PointText>所持ポイント</PointText>
                <PointNumber>{point}</PointNumber>
            </PointWrapper>
        </Wrapper>
    )
}
