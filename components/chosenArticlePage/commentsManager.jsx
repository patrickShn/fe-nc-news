import { useEffect, useState } from "react"
import axios from 'axios'
import CommentsList from "./commentsList"
import getCommentsForThisArticle from "../../utils/getCommentsForThisArticle"


export default function CommentsManager ({chosenArticleId}) {
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState([])
    const [isLoading, setIsLoading] = useState(true)





    useEffect(() => {
    getCommentsForThisArticle({setComments, chosenArticleId})
    setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    },[])

    if (isLoading){
        return (
            <div>
                Loading...
            </div>
        )
    }
    return (
    <CommentsList comments={comments}/>
    )
}