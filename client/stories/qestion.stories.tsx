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
        userName: "ぼっち大学生",
        title: "線形代数の過去問ください！",
        userId: 1,
        onClick: (id:number) => console.log(`${id}番のページに遷移`),
    },{
        userName: "陽キャ大学生",
        title: "おすすめのテニスサークルてあります？",
        userId: 2,
        onClick: (id: number) => console.log(`${id}番のページに遷移`),
    },{
        userName: "情弱大学生",
        title: "履修登録はどうやるの？",
        userId: 3,
        onClick: (id: number) => console.log(`${id}番のページに遷移`),
    },{
        userName: "狂った大学生",
        title: "勉強辛くて退学したいけどどう思いますか",
        userId: 4,
        onClick: (id: number) => console.log(`${id}番のページに遷移`),
    },]

    return (
      <QestionLayout register={register} items={items} userName={'ぼっち大学生'} point={50} handleSubmit={handleSubmit(onSubmit)} />
    );
  };