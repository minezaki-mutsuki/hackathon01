import {ComponentStory} from '@storybook/react'
import React from "react";
import { Card } from '../pages/components/molecules/card';

export default {
    title: "Molecules/Card",
    component: Card,
    tags: ['autodocs'],
}

const Template: ComponentStory<typeof Card> = (args) => (
    <Card {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
    userName: "ユーザーネーム",
    mainText: "投稿タイトルか回答文",
    isQestion: true,
    onClickQestion: (id=1111) => console.log(`${id}番の投稿です`),
    onClickStar: (id=2222) => console.log(`${id}番の投稿にいいねしました`),
    status: true,
    userId: 1111,
}
