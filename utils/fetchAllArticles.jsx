import axios from 'axios'

export default async function fetchAllArticles (setArticles) {
    const articleQuery = await axios.get(`https://be-nc-news-famm.onrender.com/api/articles`) 
    const response = articleQuery.data.articles
    setArticles(response)

}



