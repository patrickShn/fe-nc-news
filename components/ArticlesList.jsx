import ArticlesCards from './ArticlesCards'

export default function ArticlesList({articles}) {


    return (
        <ul>
            {articles&&articles.map((article) => {
                return <ArticlesCards article={article}/>
            })}
        </ul>
    )



}