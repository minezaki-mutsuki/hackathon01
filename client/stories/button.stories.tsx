import { Button } from "../pages/components/atoms/button/index";
import {ComponentStory} from '@storybook/react'
import React from "react";

export default {
    title: "Atoms/Button",
    component: Button,
    tags: ['autodocs'],
}

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
    text: "テキスト",
    onClick: () => console.log("click"),
}