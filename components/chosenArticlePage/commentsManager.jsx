import { useEffect, useState } from "react"
import CommentsList from "./commentsList"
import getCommentsForThisArticle from "../../utils/getCommentsForThisArticle"
import PostYourComment from "./PostYourComment"


export default function CommentsManager ({article_id}) {
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
    getCommentsForThisArticle({setComments, article_id})
    setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    },[newComment])


    if (isLoading){
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
        <>
    <PostYourComment article_id={article_id} setNewComment={setNewComment} newComment={newComment}/>
    <CommentsList comments={comments}/>
        </>
    )
}