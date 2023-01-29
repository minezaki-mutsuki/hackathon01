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
            <TitleText>大学情報共有掲示板（仮）</TitleText>
            {isLogined && <LogoutText onClick={() => onClickLogout()}>ログアウト</LogoutText>}
        </Wrapper>
    )
}
