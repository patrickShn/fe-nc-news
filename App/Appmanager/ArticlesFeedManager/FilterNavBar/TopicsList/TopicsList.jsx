import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { useContext } from "react"
import UserContext from "../../../../../context/UserContext"
export default function Topicslist ( {topics,setChosenTopic, chosenTopic}){

    const {loggedInUser} = useContext(UserContext)

    if (topics){
     return (
            <>
         <ul className="topicContainer">
            <h5>Search {`${chosenTopic}`} articles</h5>
        {topics.map((topic) => {
            const {slug, description} = topic
            return (
                <div key={`${slug} + ${description}`} >
                <li className="topicItem" onClick={(e) => {
                    e.preventDefault()
                    setChosenTopic(slug)
                }}>
                <Link to={`/${loggedInUser}/articles?${slug}`}>
                    <Button variant="outline-light">
                    {slug}
                    </Button>
                </Link>
                    </li>
                    </div>
            )})}
            </ul>
            </>
     )}}
        