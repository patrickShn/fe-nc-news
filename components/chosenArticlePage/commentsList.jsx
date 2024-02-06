import CommentsCards from "./CommentsCards"

export default function Commentslist ({comments}) {

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
        return <CommentsCards key={comment.comment_id} comment={comment}/>
        })
    }
            </ul>
        </div>
    )
}