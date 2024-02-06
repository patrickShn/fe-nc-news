import axios from 'axios'

export default async function PostNewCommentToArticle ({article_id, userCommentBody, setNewComment}) {
    if (userCommentBody){
        const newCommentObj = {
            author : "tickle122",
            body : userCommentBody
            
        }
        const response = await axios.post(`https://be-nc-news-famm.onrender.com/api/articles/${article_id}/comments`, newCommentObj)
        setNewComment(response)
    } 
}
