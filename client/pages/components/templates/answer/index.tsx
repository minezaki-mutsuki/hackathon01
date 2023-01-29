import { UseFormRegister } from "react-hook-form";
import { Button } from "../../atoms/button";
import { AnswerForm, AnswerFormValue } from "../../organisms/answerForm";
import { Answers } from "../../organisms/answers";
import { Header } from "../../organisms/header";
import { AnswerWrapper, BodyWrapper, Wrapper } from "./style";

type AnswersValue = {
    userName: string;
    answer: string;
    userId: number;
    onClick: (id: number) => void;
    status: boolean;
}

type AnswerProps = {
    items: AnswersValue[];
    register: UseFormRegister<AnswerFormValue>;
    userName: string;
    point: number;
    handleSubmit: () => void;
    onClick: () => void;
    title: string;
    content: string;
}

export const AnswerLayout = ({items, register, userName, point, handleSubmit, onClick, title, content}: AnswerProps) => {
    return(
        <Wrapper>
            <Header isLogined={true} />
            <BodyWrapper>
                <AnswerForm register={register} userName={userName} point={point} handleSubmit={() => handleSubmit()} />
                <AnswerWrapper>
                    <Answers items={items} title={title} content={content} />
                    <Button text={"戻る"} onClick={() => onClick()} />
                </AnswerWrapper>
            </BodyWrapper>
        </Wrapper>
    )
}
