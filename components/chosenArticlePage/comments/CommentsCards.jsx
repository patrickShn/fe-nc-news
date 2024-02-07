import { useContext } from "react"
import UserContext from "../../context/UserContext"
import { Button } from "react-bootstrap"
import deleteCommentFromArticle from '../../../utils/DeleteCommentFromArticle' 

export default function CommentsCard ({comment, hasCommentBeenDeleted,setHasCommentBeenDeleted}) {

    const {loggedInUser} = useContext(UserContext)

    const HandleDeleteComment = async (e, comment_id) => {
        e.preventDefault()
        const queryDelete = await deleteCommentFromArticle(comment_id)
        setHasCommentBeenDeleted(1-hasCommentBeenDeleted)
    }

    return (
         <div className="commentDiv">
         <li>
            <p><b>{comment.author}</b></p>
            <p>{comment.body}</p>
            <p> Votes : {comment.votes}</p>
            {comment.author===loggedInUser?<Button variant="danger" onClick={ (e) => {
                HandleDeleteComment(e, comment.comment_id)
            }
                }>Delete Comment</Button>:null}
         </li>
         </div>

    )

}