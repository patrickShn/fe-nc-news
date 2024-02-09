import ArticlesList from './ArticleList/ArticlesList'
import fetchAllArticles from '../../../components/utils/fetchAllArticles'
import { useState, useEffect, useContext } from "react"
import FilterNavBar from './FilterNavBar/FilterNavBar'
import { Link} from "react-router-dom"
import UserContext from '../../../context/UserContext'
import ErrContext from '../../../context/errContext'

export default function ArticleManager () {


    const [articles, setArticles] = useState([])
    const [topics,setTopics] = useState([])
    const [chosenTopic, setChosenTopic] = useState("all")
    const [queryString, setQueryString] = useState(null)
    const [sortDirection, setSortDirection] = useState("ASC");


    const {loggedInUser} = useContext(UserContext)
    const {setError} = useContext(ErrContext)
    



    useEffect(() => {
        fetchAllArticles({setArticles, queryString, sortDirection, setError})
    },[chosenTopic, queryString, sortDirection])

    return (
        <>
        logged in as : {loggedInUser} <Link to={`/${loggedInUser}/users`}>Switch user</Link>
        <FilterNavBar setTopics={setTopics} topics={topics} setChosenTopic={setChosenTopic} setQueryString={setQueryString} queryString={queryString} setSortDirection={setSortDirection} sortDirection={sortDirection} chosenTopic={chosenTopic}/>
        <ArticlesList articles={articles} chosenTopic={chosenTopic}/>
        </>
    )
}