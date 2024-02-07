import axios from 'axios'

import Swal from 'sweetalert2'

export default async function PostNewCommentToArticle ({article_id, userCommentBody, loggedInUser}) {
    const invalidUser = (loggedInUser === "Select user" || userCommentBody === "")
    
    if (!invalidUser){
        console.log(userCommentBody)
        console.log(invalidUser)
        const newCommentObj = {
            author : loggedInUser,
            body : userCommentBody
            
        }
        try {
        const response = await axios.post(`https://be-nc-news-famm.onrender.com/api/articles/${article_id}/comments`, newCommentObj)
        const commentBodyObj = response.data.body
        
        return commentBodyObj
        } 
        catch {
            return "err"
            
        }
    } 
    else {
        return "err"
       }
}
