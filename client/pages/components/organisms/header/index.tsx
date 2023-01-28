import { LogoutText, TitleText, Wrapper } from "./style"

type HeaderProps = {
    isLogined: boolean
}

export const Header = ({isLogined}: HeaderProps) => {
    const onClickLogout = () => {
        console.log("ログインページに遷移")
    }

    return(
        <Wrapper>
            <TitleText>大学情報共有掲示板（仮）</TitleText>
            {isLogined && <LogoutText onClick={() => onClickLogout()}>ログアウト</LogoutText>}
        </Wrapper>
    )
}
