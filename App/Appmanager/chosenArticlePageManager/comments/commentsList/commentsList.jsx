import CommentsCards from "./CommentsCards"

export default function Commentslist ({comments, hasCommentBeenDeleted, setHasCommentBeenDeleted}) {

    if (comments.length === 0){
        return (
            <div>
                <p>no Comments yet...</p>
            </div>
        )
    }


    
    return (
        <div className="commentsContainer">
            <ul>
    {comments.map((comment) => {
        return <CommentsCards key={comment.comment_id} comment={comment}  hasCommentBeenDeleted={hasCommentBeenDeleted} setHasCommentBeenDeleted={setHasCommentBeenDeleted}/>
        })
    }
            </ul>
        </div>
    )
}