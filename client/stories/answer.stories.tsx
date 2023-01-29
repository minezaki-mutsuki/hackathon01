import { AnswerFormValue } from '@/pages/components/organisms/answerForm';
import { AnswerLayout } from '@/pages/components/templates/answer';
import {ComponentStory} from '@storybook/react'
import React from "react";
import { SubmitHandler, useForm } from 'react-hook-form';

export default {
    title: "Templates/AnswerLayout",
    component: AnswerLayout,
    tags: ['autodocs'],
}

export const Basic = () => {
    const { register, handleSubmit } = useForm<AnswerFormValue>();
    const onSubmit: SubmitHandler<AnswerFormValue> = (data) => console.log(data);
  
    const items = [{
        userName: "つよつよ大学生",
        answer: "過去問なんか頼るな、自分でやれ",
        userId: 1,
        onClick: (id: number) => console.log(`${id}番のページに遷移`),
        status: false,
    },{
        userName: "人脈の多い陽キャ大学生",
        answer: "過去問もってます！",
        userId: 2,
        onClick: (id: number) => console.log(`${id}番のページに遷移`),
        status: true,
    },{
        userName: "秀才大学生",
        answer: "問題全部解けるので後で解説作ります",
        userId: 3,
        onClick: (id: number) => console.log(`${id}番のページに遷移`),
        status: true,
    },{
        userName: "情弱大学生",
        answer: "私も欲しいですー",
        userId: 4,
        onClick: (id: number) => console.log(`${id}番のページに遷移`),
        status: false,
    },]

    return (
      <AnswerLayout register={register} items={items} userName={'ぼっち大学生'} point={50} handleSubmit={handleSubmit(onSubmit)} onClick={() => console.log("投稿一覧ページに遷移")} title={'線形代数の過去問ください！'} content={'できれば回答解説もいただけるとうれしいです'}  />
    );
  };
