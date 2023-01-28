import {ComponentStory} from '@storybook/react'
import React from "react";
import { Input } from '../pages/components/molecules/input';

export default {
    title: "Molecules/Input",
    component: Input,
    tags: ['autodocs'],
}

const Template: ComponentStory<typeof Input> = (args) => (
    <Input {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
    title: "タイトルテキスト",
    isRegister: true,
    placeholder: "プレースホルダー",
    height: 200,
    isInput: true,
}
