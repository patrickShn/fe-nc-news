import {Link} from 'react-router-dom'

export default function ChosenArticleDisplay ({chosenArticleData}){

    if (chosenArticleData.length === 0){
        return (
            <div>
                loading...
            </div>
        )
    }

console.log(chosenArticleData)
            const {author, title, article_img_url} = chosenArticleData.articles
    return (
        <>
        <div className="ArticleBody">
        <h3>{title} - {author}</h3> 
        <img src={article_img_url} alt={`${title}'s image`} className="ArticleBodyImg" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum exercitationem nobis nostrum at, quis blanditiis sit, maiores aperiam veritatis quibusdam excepturi nisi. Quidem delectus praesentium vel dignissimos ullam est!
        <Link to="/">
        <button> Back To All Articles</button>
        </Link>
        </div>
        </>
    )

}