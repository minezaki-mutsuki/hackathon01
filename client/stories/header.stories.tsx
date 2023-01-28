import {ComponentStory} from '@storybook/react'
import React from "react";
import { Header } from '../pages/components/organisms/header';

export default {
    title: "Organisms/Header",
    component: Header,
    tags: ['autodocs'],
}

const Template: ComponentStory<typeof Header> = (args) => (
    <Header {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
    isLogined: true,
}
