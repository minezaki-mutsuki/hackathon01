import Router from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterFormValue } from "./components/organisms/registerForm";
import { RegisterLayout } from "./components/templates/register"

const Register = () => {
    const { register, handleSubmit } = useForm<RegisterFormValue>();

  const onClick = () => {
    Router.push('/')
  }

  const onSubmit: SubmitHandler<RegisterFormValue> = async () => {
    Router.push('/')
  };
    return(
        <RegisterLayout register={register} onClickRegister={handleSubmit(onSubmit)} onClickBack={() => onClick()} />
    )
}
export default Register