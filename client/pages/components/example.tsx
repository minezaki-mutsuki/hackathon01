import Router from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormValue } from "./organisms/loginForm";
import { LoginLayout } from "./templates/login";

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormValue>();

  const onClick = () => {
    Router.push('/register')
  }

  const onSubmit: SubmitHandler<LoginFormValue> = async () => {
    Router.push('qestion')
  };

  return(
    <LoginLayout register={register} onClickLogin={handleSubmit(onSubmit)} onClickRegister={() => onClick()} />
  )
}
export default Login
