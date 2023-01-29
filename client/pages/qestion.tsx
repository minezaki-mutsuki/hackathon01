import axios from "axios";
import Router from "next/router";
import { useEffect, useState } from "react";
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

    const [post, setPost] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/posts/', {method: 'GET'})
        .then(res => res.json())
        .then(data => {setPost(data)})
    }, [])


  const onSubmit: SubmitHandler<QestionFormValue> = async () => {
    const form = new FormData()
    form.append("id", "sss")
    form.append("user", "bc3cd64a-4eb1-4017-866f-c34e3052844f")
    form.append("title", "送信できてる？",)
    form.append("text", "繋ぎ込み難しい")

    fetch('http://127.0.0.1:8000/api/v1/posts/', {
        method: 'POST',
        body: form
    })
  };

    return(
        <QestionLayout register={register} items={post} userName={"ユーザーネーム"} point={50} handleSubmit={handleSubmit(onSubmit)} />
    )
}
export default Qestion
