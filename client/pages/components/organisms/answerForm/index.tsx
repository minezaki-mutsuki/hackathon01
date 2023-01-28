import { UseFormRegister } from "react-hook-form";
import { Button } from "../../atoms/button";
import { Input } from "../../molecules/input";
import { User } from "../../molecules/user";
import { FormWrapper, Wrapper } from "./style";

export type AnswerFormValue = {
    content: string;
}

type AnswerFormProps = {
    register: UseFormRegister<AnswerFormValue>;
    userName: string;
    point: number;
    handleSubmit: () => void;
}

export const AnswerForm = ({register, userName, point, handleSubmit}: AnswerFormProps) => {
    return(
        <Wrapper>
            <User userName={userName} point={point} />
            <FormWrapper>
                <Input isRegister={false} isInput={false} title={"回答"} {...register("content")} height={200} />
                <Button text={"回答する"} onClick={handleSubmit} />
            </FormWrapper>
        </Wrapper>
    )
}
