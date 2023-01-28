import {ComponentStory} from '@storybook/react'
import React from "react";
import { useForm } from 'react-hook-form';
import { QestionForm, QestionFormValue } from '../pages/components/organisms/qestionForm';

export default {
    title: "Organisms/QestionForm",
    component: QestionForm,
    tags: ['autodocs'],
}

const Template: ComponentStory<typeof QestionForm> = () => {
    const { register } = useForm<QestionFormValue>();
    return <QestionForm register={register} userName={'ユーザーネーム'} point={50} handleSubmit={() => console.log("投稿する")} />;
  };
  export const Default = Template.bind({});

