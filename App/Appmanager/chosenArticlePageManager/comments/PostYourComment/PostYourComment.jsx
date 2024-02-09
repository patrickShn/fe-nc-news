import { useContext, useState } from "react"

import Button from 'react-bootstrap/Button'


import Swal from 'sweetalert2'



import PostNewCommentToArticle from "../../../../../components/utils/PostNewCommentToArticle"
import UserContext from "../../../../../context/UserContext"
import ErrContext from "../../../../../context/errContext"
 
export default function PostYourComment ({article_id, setNewComment}) {

    const [userCommentBody, setUserCommentBody] = useState("")

    const {loggedInUser} = useContext(UserContext)
    const {setError} = useContext(ErrContext)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const newComment = await PostNewCommentToArticle({article_id, userCommentBody, loggedInUser, setError})
        if (newComment === "err"){
            Swal.fire({
                title: 'Invalid',
                text: 'Please select a user to post a comment, if you have selected a user please add a body to the comment',
                icon: 'info',
              })
        }else{
        Swal.fire({
            title: 'success!',
            text: 'comment posted :)',
            icon: '',
          })
        setNewComment(newComment)
        setUserCommentBody("")
        }
    }

    const resetInputBox = () => {
        setUserCommentBody("")
    }

    



    return (
        <div className="newCommentContainer">
        <form action="submit" className="NewCommentForm" onSubmit={handleSubmit}>
        <textarea required placeholder="Post your comment..." value={userCommentBody} onChange={
            (e) => {setUserCommentBody(e.target.value) 
             }}/>
        <Button variant="primary" onClick={handleSubmit}>Post Comment </Button>
        <Button variant="dark" onClick={resetInputBox}>Reset </Button>
        </form>
        </div>
    )
}