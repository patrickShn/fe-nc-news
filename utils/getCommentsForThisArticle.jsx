import axios from 'axios'

export default async function getCommentsForThisArticle ({setComments, chosenArticleId}) {
        const commentQuery = await axios.get(`https://be-nc-news-famm.onrender.com/api/articles/${chosenArticleId}/comments`)
        const response = await commentQuery.data
        setComments(response)
} 