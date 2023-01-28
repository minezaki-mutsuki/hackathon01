import {ComponentStory} from '@storybook/react'
import React from "react";
import { User } from '../pages/components/molecules/user';

export default {
    title: "Molecules/User",
    component: User,
    tags: ['autodocs'],
}

const Template: ComponentStory<typeof User> = (args) => (
    <User {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
    userName: "ユーザーネーム",
    point: 50,
}
