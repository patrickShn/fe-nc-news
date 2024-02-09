import { useContext, useEffect,} from "react";

import Button from 'react-bootstrap/Button';

import getTopics from '../../../../components/utils/getTopics'

import TopicsList from './TopicsList/TopicsList'


import QueriesCheckBoxList from "./queriesCheckBoxList/queriesCheckBoxLIst";
import { Link } from "react-router-dom";
import UserContext from "../../../../context/UserContext";
import ErrContext from "../../../../context/errContext";

export default function FilterNavBar ({topics, setTopics, setChosenTopic, chosenTopic, setQueryString, queryString, setSortDirection, sortDirection}) {


    const {loggedInUser} = useContext(UserContext)
    const {setError} = useContext(ErrContext)


    useEffect(() => {
        getTopics().then((response) =>{
          if (response !== "err"){
            setTopics(response)
          } else {
            setError("err")
          }
        })
    },[])

    return (
        <nav>
        <div className="d-grid gap-3">
        <Link to={`/${loggedInUser}/articles?${chosenTopic}`}>
      <Button variant="dark" size="md" onClick={(e)=> {
          e.preventDefault()
          setChosenTopic("all")}}>
        All Articles
      </Button>
    </Link>
      </div>
        <div>
                <TopicsList className="TopicsBar" topics={topics} setChosenTopic={setChosenTopic} chosenTopic={chosenTopic}/>
                <QueriesCheckBoxList setQueryString={setQueryString} queryString={queryString} setSortDirection={setSortDirection} sortDirection={sortDirection}/>
        </div>


        </nav>
    )
}