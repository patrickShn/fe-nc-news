import { useEffect,} from "react";

import Button from 'react-bootstrap/Button';

import getTopics from '../../../../components/utils/getTopics'

import TopicsList from './TopicsList/TopicsList'


import QueriesCheckBoxList from "./queriesCheckBoxList/queriesCheckBoxLIst";

export default function FilterNavBar ({topics, setTopics, setChosenTopic, setQueryString, queryString, setSortDirection, sortDirection}) {


    useEffect(() => {
        getTopics().then((response) =>{
            setTopics(response)
        })
    },[])


    return (
        <nav>
            <h5>Search Articles By : </h5>
        <ul>
                <TopicsList className="TopicsBar" topics={topics} setChosenTopic={setChosenTopic}/>
                <QueriesCheckBoxList setQueryString={setQueryString} queryString={queryString} setSortDirection={setSortDirection} sortDirection={sortDirection}/>
        </ul>


        <div className="g-grid gap-">
      <Button variant="primary" size="md" onClick={(e)=> {
            e.preventDefault()
            setChosenTopic(null)}}>
        All Articles
      </Button>
      </div>
        </nav>
    )
}