import {ComponentStory} from '@storybook/react'
import React from "react";
import { Cards } from '../pages/components/organisms/cards';

export default {
    title: "Organisms/Cards",
    component: Cards,
    tags: ['autodocs'],
}

const Template: ComponentStory<typeof Cards> = (args) => (
    <Cards {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
    items: [{
        userName: "ユーザー1",
        title: "タイトル1",
        userId: 1,
        onClick: (id) => console.log(`${id}番のページに遷移`),
    },{
        userName: "ユーザー2",
        title: "タイトル2",
        userId: 2,
        onClick: (id) => console.log(`${id}番のページに遷移`),
    },{
        userName: "ユーザー3",
        title: "タイトル3",
        userId: 3,
        onClick: (id) => console.log(`${id}番のページに遷移`),
    },{
        userName: "ユーザー4",
        title: "タイトル4",
        userId: 4,
        onClick: (id) => console.log(`${id}番のページに遷移`),
    },]
}
