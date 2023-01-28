import { UseFormRegister } from "react-hook-form";
import { Button } from "../../atoms/button";
import { Input } from "../../molecules/input";
import { User } from "../../molecules/user";
import { FormWrapper, Wrapper } from "./style";

export type QestionFormValue = {
    title: string;
    content: string;
}

type QestionFormProps = {
    register: UseFormRegister<QestionFormValue>;
    userName: string;
    point: number;
    handleSubmit: () => void;
}

export const QestionForm = ({register, userName, point, handleSubmit}: QestionFormProps) => {
    return(
        <Wrapper>
            <User userName={userName} point={point} />
            <FormWrapper>
                <Input isRegister={false} isInput={true} title={"タイトル"} {...register("title")} />
                <Input isRegister={false} isInput={false} title={"内容"} {...register("content")} height={200} />
                <Button text={"投稿する"} onClick={handleSubmit} />
            </FormWrapper>
        </Wrapper>
    )
}