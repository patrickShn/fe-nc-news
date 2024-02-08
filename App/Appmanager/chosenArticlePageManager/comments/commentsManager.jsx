import { useEffect, useState } from "react"
import CommentsList from "./commentsList/commentsList"
import getCommentsForThisArticle from "../../../../components/utils/getCommentsForThisArticle"
import PostYourComment from "./PostYourComment/PostYourComment"


export default function CommentsManager ({article_id}) {
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [hasCommentBeenDeleted, setHasCommentBeenDeleted] = useState(1)

    
    useEffect(() => {
    getCommentsForThisArticle({setComments, article_id})
    setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    },[newComment, hasCommentBeenDeleted])


    if (isLoading){
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
        <>
    <PostYourComment article_id={article_id} setNewComment={setNewComment}/>
    <CommentsList comments={comments}  hasCommentBeenDeleted={hasCommentBeenDeleted} setHasCommentBeenDeleted={setHasCommentBeenDeleted}/>
        </>
    )
}