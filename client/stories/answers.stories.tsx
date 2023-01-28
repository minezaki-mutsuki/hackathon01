import {ComponentStory} from '@storybook/react'
import React from "react";
import { Answers } from '../pages/components/organisms/answers';

export default {
    title: "Organisms/Answers",
    component: Answers,
    tags: ['autodocs'],
}

const Template: ComponentStory<typeof Answers> = (args) => (
    <Answers {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
    items: [{
        userName: "ユーザー1",
        answer: "回答1",
        userId: 1,
        onClick: (id) => console.log(`${id}番のページに遷移`),
        status: false,
    },{
        userName: "ユーザー2",
        answer: "回答2",
        userId: 2,
        onClick: (id) => console.log(`${id}番のページに遷移`),
        status: false,
    },{
        userName: "ユーザー3",
        answer: "回答3",
        userId: 3,
        onClick: (id) => console.log(`${id}番のページに遷移`),
        status: false,
    },{
        userName: "ユーザー4",
        answer: "回答4",
        userId: 4,
        onClick: (id) => console.log(`${id}番のページに遷移`),
        status: false,
    },],
    title: "タイトル",
    content: "内容",
}
