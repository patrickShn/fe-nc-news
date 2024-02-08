import { useContext } from 'react'
import {Link} from 'react-router-dom'
import UserContext from '../../../../context/UserContext'


export default function ArticlesCards ({article}) {

    const {author, title, article_id, article_img_url, topic, created_at, comment_count, votes} = article

const {loggedInUser} = useContext(UserContext)

    return (
        <div className="ArticleContainer" onClick={(e) => {
        }}>
            <Link to={`/${loggedInUser}/articles/${article_id}`}>
            <li key={article_id}>
                <p>{title} - {author}</p>
                <p>Topic - {topic}</p>
                <p> Posted @ {created_at.toLocaleString()}</p>
                <p> comments (view all {comment_count})</p>
                <p>Votes :  {votes}</p>
                <img src={article_img_url} alt={`${title} s profile picture`}/>
            </li>
            </Link>
        </div>
    )

}