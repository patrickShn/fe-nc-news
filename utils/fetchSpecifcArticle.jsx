import axios from 'axios'

export default async function fetchSpecificArticle ({setChosenArticleData, chosenArticleId, setVotes}) {
    const SpecificArticleQuery = await axios.get(`https://be-nc-news-famm.onrender.com/api/articles/${chosenArticleId.article_id}`)
    const response = SpecificArticleQuery.data
    setChosenArticleData(response)
    setVotes(response.articles.votes)
}