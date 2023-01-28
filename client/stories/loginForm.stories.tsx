import {ComponentStory} from '@storybook/react'
import React from "react";
import { useForm } from 'react-hook-form';
import { LoginForm, LoginFormValue } from '../pages/components/organisms/loginForm';

export default {
    title: "Organisms/LoginForm",
    component: LoginForm,
    tags: ['autodocs'],
}

const Template: ComponentStory<typeof LoginForm> = () => {
    const { register } = useForm<LoginFormValue>();
    return <LoginForm register={register} />;
  };
  export const Default = Template.bind({});
  