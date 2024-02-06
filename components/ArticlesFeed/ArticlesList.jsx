import ArticlesCards from './ArticlesCards'

export default function ArticlesList({articles, setChosenArticleId}) {


    return (
        <ul>
            {articles&&articles.map((article) => {
                const {article_id} = article
                return <ArticlesCards key={article_id} article={article} setChosenArticleId={setChosenArticleId}/>
            })}
        </ul>
    )



}