import { UseFormRegister } from "react-hook-form";
import { Input } from "../../molecules/input";
import { Wrapper } from "./style";

export type LoginFormValue = {
    email: string;
    passward: string;
}

type LoginFormProps = {
    register: UseFormRegister<LoginFormValue>;
}

export const LoginForm = ({register}: LoginFormProps) => {
    return(
        <Wrapper>
            <Input isRegister={true} isInput={true} placeholder={"email"} {...register("email")} />
            <Input isRegister={true} isInput={true} placeholder={"passward"} {...register("passward")} formtype={"password"} />
        </Wrapper>
    )
}
