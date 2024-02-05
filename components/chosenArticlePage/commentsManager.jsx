import { useEffect, useState } from "react"
import CommentsCards from './CommentsCards'

export default function CommentsManager ({chosenArticleId}) {
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState([])


    useEffect(() => {
        const getCommentsForThisArticle = async() => {
        const commentQuery = await fetch(`https://be-nc-news-famm.onrender.com/api/articles/${chosenArticleId}/comments`)
        const response = await commentQuery.json()
        setComments(response)
        }
        getCommentsForThisArticle()
    },[])

    return (
        <div className="commentsContainer">
            <ul>
            <CommentsCards comments={comments}/>
            </ul>
        </div>
    )
}