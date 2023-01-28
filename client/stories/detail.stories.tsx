import {ComponentStory} from '@storybook/react'
import React from "react";
import { Detail } from '../pages/components/molecules/detail';

export default {
    title: "Molecules/Detail",
    component: Detail,
    tags: ['autodocs'],
}

const Template: ComponentStory<typeof Detail> = (args) => (
    <Detail {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
    title: "タイトルテキスト",
    contents: "内容",
}
