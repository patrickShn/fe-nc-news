export default async function getTopics ({setTopics}) {
    const topicsQuery = await fetch(`https://be-nc-news-famm.onrender.com/api/topics`)
    const response = await topicsQuery.json()
    setTopics(response)
}