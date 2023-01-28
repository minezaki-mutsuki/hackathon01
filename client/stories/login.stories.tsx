import {ComponentStory} from '@storybook/react'
import React from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginLayout } from '../pages/components/templates/login';
import { LoginFormValue } from '../pages/components/organisms/loginForm';

export default {
    title: "Templates/LoginLayout",
    component: LoginLayout,
    tags: ['autodocs'],
}

export const Basic = () => {
    const { register, handleSubmit } = useForm<LoginFormValue>();
    const onSubmit: SubmitHandler<LoginFormValue> = (data) => console.log(data);
  
    return (
      <LoginLayout register={register} onClickLogin={handleSubmit(onSubmit)} onClickRegister={() => console.log("新規登録ページに遷移")} />
    );
  };