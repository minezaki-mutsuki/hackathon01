import { IconWrapper, MainText, UserName, UserWrapper, Wrapper } from "./style";

type CardProps = {
    userName: string;
    userId: number;
    mainText: string;
    isQestion: boolean;
    onClickQestion: (id: number) => void;
    onClickStar: (id: number) => void;
    status: boolean;
}

export const Card = ({userName,userId, mainText, isQestion, onClickQestion, onClickStar, status}: CardProps) => {

    return(
        <Wrapper onClick={() => onClickQestion(userId)} isQestion={isQestion}>
            <UserWrapper>
                <UserName>{userName}</UserName>
                {(isQestion) ? "" : status ? <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 0L11.6329 7.60081H18.535L12.9511 12.2984L15.084 19.8992L9.5 15.2016L3.91604 19.8992L6.04892 12.2984L0.464963 7.60081H7.36712L9.5 0Z" fill="#E0FC36"/>
</svg>
 : <IconWrapper onClick={() => onClickStar(userId)}><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M9.5 0L11.6329 7.60081H18.535L12.9511 12.2984L15.084 19.8992L9.5 15.2016L3.91604 19.8992L6.04892 12.2984L0.464963 7.60081H7.36712L9.5 0Z" fill="white"/>
 </svg></IconWrapper>
 }
            </UserWrapper>
            <MainText>{mainText}</MainText>
        </Wrapper>
    )
}