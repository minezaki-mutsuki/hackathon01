import {ComponentStory} from '@storybook/react'
import React from "react";
import { useForm } from 'react-hook-form';
import { AnswerForm, AnswerFormValue } from '../pages/components/organisms/answerForm';

export default {
    title: "Organisms/AnswerForm",
    component: AnswerForm,
    tags: ['autodocs'],
}

const Template: ComponentStory<typeof AnswerForm> = () => {
    const { register } = useForm<AnswerFormValue>();
    return <AnswerForm register={register} userName={'ユーザーネーム'} point={50} handleSubmit={() => console.log("回答する")} />;
  };
  export const Default = Template.bind({});
