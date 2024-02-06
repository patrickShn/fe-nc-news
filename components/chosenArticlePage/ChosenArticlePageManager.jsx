import { useEffect, useState } from "react"

import ChosenArticleDisplay from "./ChosenArticleDisplay";
import CommentsManager from "./commentsManager";
import VotingContainer from "./VotingManager";
import { ChosenArticleContext } from "../context/ChosenarticleContext";

import fetchSpecificArticle from '../../utils/fetchSpecifcArticle'
import { useParams } from "react-router-dom";

export default function ChosenArticlePageManager () {

    const [chosenArticleData, setChosenArticleData] = useState([])
    const [votes, setVotes] = useState(0)
    const [loading, setloading] = useState(false)


    const {article_id} = useParams()


    useEffect(() => {
        setTimeout(() => {
            setloading(false);
          }, 5000);
    fetchSpecificArticle({setChosenArticleData, article_id, setVotes})
        }, [setChosenArticleData])

        
    if (loading){
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <>
        <ChosenArticleContext.Provider value={{chosenArticleData}}>
            <ChosenArticleDisplay/>
            <VotingContainer votes={votes} setVotes={setVotes} article_id={article_id}/>
            <CommentsManager article_id={article_id}/>
        </ChosenArticleContext.Provider>
        </>
            
        
    )
    
}