import axios from 'axios'

export default async function fetchSpecificArticle ({setChosenArticleData, article_id, setVotes, setError}) {
    try {
        const SpecificArticleQuery = await axios.get(`https://be-nc-news-famm.onrender.com/api/articles/${article_id}`)
        const response = SpecificArticleQuery.data
        setChosenArticleData(response)
        setVotes(response.articles.votes)
    }
     catch (err) {
        setError(err.code)
     }
}