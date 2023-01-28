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
        userName: "ユーザー1",
        answer: "回答1",
        userId: 1,
        onClick: (id: number) => console.log(`${id}番のページに遷移`),
        status: false,
    },{
        userName: "ユーザー2",
        answer: "回答2",
        userId: 2,
        onClick: (id: number) => console.log(`${id}番のページに遷移`),
        status: false,
    },{
        userName: "ユーザー3",
        answer: "回答3",
        userId: 3,
        onClick: (id: number) => console.log(`${id}番のページに遷移`),
        status: false,
    },{
        userName: "ユーザー4",
        answer: "回答4",
        userId: 4,
        onClick: (id: number) => console.log(`${id}番のページに遷移`),
        status: false,
    },]

    return (
      <AnswerLayout register={register} items={items} userName={'ユーザーネーム'} point={50} handleSubmit={handleSubmit(onSubmit)} onClick={() => console.log("投稿一覧ページに遷移")} title={'タイトル'} content={'内容'}  />
    );
  };
