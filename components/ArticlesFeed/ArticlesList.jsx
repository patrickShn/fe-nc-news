import { useParams } from 'react-router-dom'
import ArticlesCards from './ArticlesCards'

export default function ArticlesList({articles, setChosenArticleId}) {

const {article_id} = useParams()

    return (
        <ul>
            {articles&&articles.map((article) => {
                const {article_id} = article
                return <ArticlesCards key={article_id} article={article} setChosenArticleId={setChosenArticleId}/>
            })}
        </ul>
    )



}