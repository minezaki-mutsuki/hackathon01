import { Card } from "../../molecules/card";
import { Wrapper } from "./style";

type CardsValue = {
    userName: string;
    title: string;
    userId: number;
    onClick: (id: number) => void;
}

type CardsProps = {
    items: CardsValue[]
}

export const Cards = ({items}: CardsProps) => {
    return(
        <Wrapper>
            {items.map((item, index) => (
                <Card key={index} userName={item.userName} userId={item.userId} mainText={item.title} isQestion={true} onClickQestion={() => item.onClick(item.userId)} onClickStar={() => console.log("")
                } status={false} />
            ))}
        </Wrapper>
    )
}