import Router from "next/router"
import { LogoutText, TitleText, Wrapper } from "./style"

type HeaderProps = {
    isLogined: boolean
}

export const Header = ({isLogined}: HeaderProps) => {
    const onClickLogout = () => {
        Router.push('/')
    }

    return(
        <Wrapper>
            <TitleText>情弱Helper</TitleText>
            {isLogined && <LogoutText onClick={() => onClickLogout()}>ログアウト</LogoutText>}
        </Wrapper>
    )
}
