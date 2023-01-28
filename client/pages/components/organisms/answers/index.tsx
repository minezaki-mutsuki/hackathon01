import { Card } from "../../molecules/card";
import { Detail } from "../../molecules/detail";
import { AnswersWrapper, Wrapper } from "./style";

type AnswersValue = {
    userName: string;
    answer: string;
    userId: number;
    onClick: (id: number) => void;
    status: boolean;
}

type AnswersProps = {
    items: AnswersValue[];
    title: string;
    content: string;
}

export const Answers = ({items, title, content}: AnswersProps) => {
    return(
        <AnswersWrapper>
        <Detail title={title} contents={content} />
        <Wrapper>
            {items.map((item, index) => (
                <Card key={index} userName={item.userName} userId={item.userId} mainText={item.answer} isQestion={false} onClickQestion={() => console.log("")} onClickStar={() => item.onClick(item.userId)} status={item.status} />
            ))}
        </Wrapper>
        </AnswersWrapper>
    )
}
