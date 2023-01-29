import { UseFormRegister } from "react-hook-form";
import { Button } from "../../atoms/button";
import { Header } from "../../organisms/header";
import { RegisterForm, RegisterFormValue } from "../../organisms/registerForm";
import { BodyWrapper, ButtonWrapper, TitleText, Wrapper } from "./style";

type RegisterProps = {
    register: UseFormRegister<RegisterFormValue>;
    onClickRegister: () => void;
    onClickBack: () => void;
}

export const RegisterLayout = ({register, onClickRegister, onClickBack}: RegisterProps) => {
    return(
        <Wrapper>
            <Header isLogined={false} />
            <BodyWrapper>
            <TitleText>情報を入力してください</TitleText>
            <RegisterForm register={register} />
            <ButtonWrapper>
                <Button text={"戻る"} onClick={() => onClickBack()} />
                <Button text={"登録する"} onClick={() => onClickRegister()} />
            </ButtonWrapper>
            </BodyWrapper>
        </Wrapper>
    )
}
