import axios from 'axios'

export default async function fetchAllArticles ({setArticles, queryString, sortDirection}) {
    if (queryString){
        const articleQuery = await axios.get(`https://be-nc-news-famm.onrender.com/api/articles?sort_by=${queryString}&&order=${sortDirection}`)
        const response = articleQuery.data.articles
        setArticles(response)
    } else {
        const articleQuery = await axios.get(`https://be-nc-news-famm.onrender.com/api/articles?order=${sortDirection}`) 
        const response = articleQuery.data.articles
        setArticles(response)
        
    }

}



