import { useEffect, useState } from "react";

// import Link from 'react-router-dom'

import TopicsList from "./topicsList";

export default function NavBar () {
    const [topics,setTopics] = useState([])

    useEffect(() => {
        const getTopics = async() => {
            const topicsQuery = await fetch(`https://be-nc-news-famm.onrender.com/api/topics`)
            const response = await topicsQuery.json()
            setTopics(response)
        }
        getTopics()
    },[])

    return (
        <nav>
        <ul className="TopicsBar">
           <TopicsList topics={topics}/>
        </ul>
        </nav>
    )
}