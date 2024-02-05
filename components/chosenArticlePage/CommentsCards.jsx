export default function commentsCards ({comments}) {
    console.log(comments)
    
    return ( comments.map((comment) => {
            return (
                <div className="commentDiv">
                    <li key={comment.comment_id}>
                        <p><b>{comment.author}</b></p>
                        <p>{comment.body}</p>
                        <p> Votes : {comment.votes}</p>
                        <button> UpVote! </button>
                    </li>
                </div>
            )
    })
    )

}