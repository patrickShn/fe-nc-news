import { useState } from "react"

import Button from 'react-bootstrap/Button'

import Swal from 'sweetalert2'

import PostNewCommentToArticle from "../../utils/PostNewCommentToArticle"
 
export default function PostYourComment ({article_id, setNewComment}) {

    const [userCommentBody, setUserCommentBody] = useState("")




    const handleSubmit = (e) => {
        e.preventDefault()
        PostNewCommentToArticle({article_id, userCommentBody, setNewComment})
        Swal.fire({
            title: "Comment Posted!",
            text: "",
           timer: 2000,
          });
        setUserCommentBody("")
    }

    const resetInputBox = () => {
        setUserCommentBody("")
    }

    



    return (
        <div className="newCommentContainer">
        <form action="submit" className="NewCommentForm" onSubmit={handleSubmit}>
        <input placeholder="Post your comment..." value={userCommentBody} onChange={
            (e) => {setUserCommentBody(e.target.value) 
             }} required />
        <Button variant="primary" onClick={handleSubmit}>Post Comment </Button>
        <Button variant="dark" onClick={resetInputBox}>Reset </Button>
        </form>
        </div>
    )
}