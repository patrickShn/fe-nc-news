// import Link from 'react-router-dom'


export default function ArticlesCards ({article}) {

    const {author, title, id, article_img_url, topic} = article

    return (
        <div className="ArticleContainer">
            <li key={id}>
                {/* <Link to={`/${article}`}> */}
                <p>{title} - {author}</p>
                {/* </Link> */}
                <p>Topic - {topic}</p>
                <img src={article_img_url} alt={`${author} s profile picture`}/>
            </li>

        </div>
    )

}