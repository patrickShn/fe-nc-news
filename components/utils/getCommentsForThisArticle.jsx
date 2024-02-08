import axios from 'axios'

export default async function getCommentsForThisArticle ({setComments, article_id}) {
        const commentQuery = await axios.get(`https://be-nc-news-famm.onrender.com/api/articles/${article_id}/comments`)
        const response = await commentQuery.data
        setComments(response)
} 