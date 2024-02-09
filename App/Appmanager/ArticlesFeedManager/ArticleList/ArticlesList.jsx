import ArticlesCards from './ArticlesCards'

export default function ArticlesList({articles, chosenTopic}) {


    return (
        <ul className='ArticlesList'>
            {articles&&articles.map((article) => {
                const {article_id, topic} = article
                if (chosenTopic !== "all"){

                    if (chosenTopic === topic){
                        return <ArticlesCards key={article_id} article={article}/>
                    } else {
                        return null
                    }
                }
                 else {
                    return <ArticlesCards key={article_id} article={article}/>
                }
            })}
        </ul>
    )



}