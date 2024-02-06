export default function CommentsCard ({comment}) {
    return (
         <div className="commentDiv">
         <li>
            <p><b>{comment.author}</b></p>
            <p>{comment.body}</p>
            <p> Votes : {comment.votes}</p>
         </li>
         </div>

    )

}