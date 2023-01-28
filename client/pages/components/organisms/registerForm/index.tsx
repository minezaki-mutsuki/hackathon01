import { UseFormRegister } from "react-hook-form";
import { Input } from "../../molecules/input";
import { Wrapper } from "./style";

export type RegisterFormValue = {
    userName: string;
    email: string;
    passward: string;
    school: string;
}

type RegisterFormProps = {
    register: UseFormRegister<RegisterFormValue>;
}

export const RegisterForm = ({register}: RegisterFormProps) => {
    return(
        <Wrapper>
            <Input isRegister={true} isInput={true} title={"ユーザー名"} {...register("userName")} />
            <Input isRegister={true} isInput={true} title={"メールアドレス"} {...register("email")} />
            <Input isRegister={true} isInput={true} title={"パスワード"} {...register("passward")} formtype={"password"} />
            <Input isRegister={true} isInput={true} title={"在籍校"} {...register("school")} />
        </Wrapper>
    )
}