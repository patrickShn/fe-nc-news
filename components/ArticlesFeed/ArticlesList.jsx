import ArticlesCards from './ArticlesCards'

export default function ArticlesList({articles, setChosenArticleId}) {


    return (
        <ul>
            {articles&&articles.map((article) => {
                return <ArticlesCards article={article} setChosenArticleId={setChosenArticleId}/>
            })}
        </ul>
    )



}