import ArticlesList from './ArticleList/ArticlesList'
import fetchAllArticles from '../../../components/utils/fetchAllArticles'
import { useState, useEffect, useContext } from "react"
import FilterNavBar from './FilterNavBar/FilterNavBar'
import { Link } from "react-router-dom"
import UserContext from '../../../context/UserContext'
export default function ArticleManager () {


    const [articles, setArticles] = useState([])
    const [topics,setTopics] = useState([])
    const [chosenTopic, setChosenTopic] = useState(null)
    const [queryString, setQueryString] = useState(null)
    const [sortDirection, setSortDirection] = useState("ASC");


    const {loggedInUser} = useContext(UserContext)




    useEffect(() => {
        fetchAllArticles({setArticles, queryString, sortDirection})
    },[chosenTopic, queryString, sortDirection])

    return (
        <>
        <Link to={`/${loggedInUser}/articles`}></Link>
        logged in as : {loggedInUser} <Link to={`/${loggedInUser}/users`}>Switch user</Link>
        <FilterNavBar setTopics={setTopics} topics={topics} setChosenTopic={setChosenTopic} setQueryString={setQueryString} queryString={queryString} setSortDirection={setSortDirection} sortDirection={sortDirection}/>
        <ArticlesList articles={articles} chosenTopic={chosenTopic}/>
        </>
    )
}