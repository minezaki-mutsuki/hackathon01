import Router from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { QestionFormValue } from "./components/organisms/qestionForm";
import { QestionLayout } from "./components/templates/question"

const Qestion = () => {
    const { register, handleSubmit } = useForm<QestionFormValue>();

    const items = [{
        userName: "ユーザー1",
        title: "タイトル1",
        userId: 1,
        onClick: (id:number) => Router.push(`/${id}`),
    },{
        userName: "ユーザー2",
        title: "タイトル2",
        userId: 2,
        onClick: (id:number) => Router.push(`/${id}`),
    },{
        userName: "ユーザー3",
        title: "タイトル3",
        userId: 3,
        onClick: (id:number) => Router.push(`/${id}`),
    },{
        userName: "ユーザー4",
        title: "タイトル4",
        userId: 4,
        onClick: (id:number) => Router.push(`/${id}`),
    },]


  const onSubmit: SubmitHandler<QestionFormValue> = async () => {
    // post処理
  };

    return(
        <QestionLayout register={register} items={items} userName={"ユーザーネーム"} point={50} handleSubmit={handleSubmit(onSubmit)} />
    )
}
export default Qestion
