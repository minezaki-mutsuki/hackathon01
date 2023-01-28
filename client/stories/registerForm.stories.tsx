import {ComponentStory} from '@storybook/react'
import React from "react";
import { useForm } from 'react-hook-form';
import { RegisterForm, RegisterFormValue } from '../pages/components/organisms/registerForm';

export default {
    title: "Organisms/RegisterForm",
    component: RegisterForm,
    tags: ['autodocs'],
}

const Template: ComponentStory<typeof RegisterForm> = () => {
    const { register } = useForm<RegisterFormValue>();
    return <RegisterForm register={register} />;
  };
  export const Default = Template.bind({});
  