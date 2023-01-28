import { UseFormRegister } from "react-hook-form";
import { Cards } from "../../organisms/cards";
import { Header } from "../../organisms/header";
import { QestionForm, QestionFormValue } from "../../organisms/qestionForm";
import { BodyWrapper, Wrapper } from "./style";

type CardsValue = {
    userName: string;
    title: string;
    userId: number;
    onClick: (id: number) => void;
}

type QestionProps = {
    items: CardsValue[];
    register: UseFormRegister<QestionFormValue>;
    userName: string;
    point: number;
    handleSubmit: () => void;
}

export const QestionLayout = ({items, register, userName, point, handleSubmit}: QestionProps) => {
    return(
        <Wrapper>
            <Header isLogined={true} />
            <BodyWrapper>
                <QestionForm register={register} userName={userName} point={point} handleSubmit={() => handleSubmit()} />
                <Cards items={items} />
            </BodyWrapper>
        </Wrapper>
    )
}
