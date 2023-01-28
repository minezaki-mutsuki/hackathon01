import { UseFormRegister } from "react-hook-form";
import { Button } from "../../atoms/button";
import { Header } from "../../organisms/header";
import { LoginForm, LoginFormValue } from "../../organisms/loginForm";
import { BodyWrapper, ButtonWrapper, TitleText, Wrapper } from "./style";

type LoginProps = {
    register: UseFormRegister<LoginFormValue>;
    onClickLogin: () => void;
    onClickRegister: () => void;
}

export const LoginLayout = ({register, onClickLogin, onClickRegister}: LoginProps) => {
    return(
        <Wrapper>
            <Header isLogined={false} />
            <BodyWrapper>
            <TitleText>大学情報共有掲示板</TitleText>
            <LoginForm register={register} />
            <ButtonWrapper>
                <Button text={"ログイン"} onClick={() => onClickLogin()} />
                <Button text={"新規登録"} onClick={() => onClickRegister()} />
            </ButtonWrapper>
            </BodyWrapper>
        </Wrapper>
    )
}
