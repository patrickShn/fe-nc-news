import axios from 'axios'

export default async function getTopics () {
    const topicsQuery = await axios.get(`https://be-nc-news-famm.onrender.com/api/topics`)
    const response = await topicsQuery.data.topics
    return response
}