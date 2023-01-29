import { QestionLayout } from '@/pages/components/templates/question';
import {ComponentStory} from '@storybook/react'
import React from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { QestionFormValue } from '../pages/components/organisms/qestionForm';

export default {
    title: "Templates/QestionLayout",
    component: QestionLayout,
    tags: ['autodocs'],
}

export const Basic = () => {
    const { register, handleSubmit } = useForm<QestionFormValue>();
    const onSubmit: SubmitHandler<QestionFormValue> = (data) => console.log(data);
  
    const items = [{
        userName: "ユーザー1",
        title: "タイトル1",
        userId: 1,
        onClick: (id:number) => console.log(`${id}番のページに遷移`),
    },{
        userName: "ユーザー2",
        title: "タイトル2",
        userId: 2,
        onClick: (id: number) => console.log(`${id}番のページに遷移`),
    },{
        userName: "ユーザー3",
        title: "タイトル3",
        userId: 3,
        onClick: (id: number) => console.log(`${id}番のページに遷移`),
    },{
        userName: "ユーザー4",
        title: "タイトル4",
        userId: 4,
        onClick: (id: number) => console.log(`${id}番のページに遷移`),
    },]

    return (
      <QestionLayout register={register} items={items} userName={'ユーザーネーム'} point={50} handleSubmit={handleSubmit(onSubmit)} />
    );
  };