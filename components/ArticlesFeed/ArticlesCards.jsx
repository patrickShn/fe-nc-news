import {Link} from 'react-router-dom'


export default function ArticlesCards ({article}) {

    const {author, title, article_id, article_img_url, topic} = article


    return (
        <div className="ArticleContainer" onClick={(e) => {
        }}>
            <Link to={`articles/${article_id}`}>
            <li key={article_id}>
                <p>{title} - {author}</p>
                <p>Topic - {topic}</p>
                <img src={article_img_url} alt={`${title} s profile picture`}/>
            </li>
            </Link>
        </div>
    )

}