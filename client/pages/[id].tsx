import Router from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { AnswerFormValue } from "./components/organisms/answerForm";
import { AnswerLayout } from "./components/templates/answer"

const Answer = () => {
    const { register, handleSubmit } = useForm<AnswerFormValue>();

  const onClick = () => {
    Router.push('/qestion')
  }

  const onSubmit: SubmitHandler<AnswerFormValue> = async () => {
    Router.push('/')
  }

  const items = [{
    userName: "1",
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

    return(
        <AnswerLayout register={register} items={items} userName={"ぼっち大学生"} point={50} handleSubmit={handleSubmit(onSubmit)} onClick={() => onClick()} title={"タイトル"} content={"内容"} />
    )
}
export default Answer
