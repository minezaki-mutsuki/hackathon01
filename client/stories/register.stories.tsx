import {ComponentStory} from '@storybook/react'
import React from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterLayout } from '../pages/components/templates/register';
import { RegisterFormValue } from '../pages/components/organisms/registerForm';

export default {
    title: "Templates/RegisterLayout",
    component: RegisterLayout,
    tags: ['autodocs'],
}

export const Basic = () => {
    const { register, handleSubmit } = useForm<RegisterFormValue>();
    const onSubmit: SubmitHandler<RegisterFormValue> = (data) => console.log(data);
  
    return (
      <RegisterLayout register={register} onClickRegister={handleSubmit(onSubmit)} onClickBack={() => console.log("ログインページに遷移")} />
    );
  };