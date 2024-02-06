import { useEffect, useState } from "react"

import ChosenArticleDisplay from "./ChosenArticleDisplay";
import CommentsManager from "./commentsManager";
import VotingContainer from "./VotingContainer";
import { ChosenArticlesContext } from "../context/ChosenarticlesContext";

import fetchSpecificArticle from '../../utils/fetchSpecifcArticle'

export default function ChosenArticlePageManager ({chosenArticleId}) {

    const [chosenArticleData, setChosenArticleData] = useState([])
    const [votes, setVotes] = useState(0)

    useEffect(() => {
    fetchSpecificArticle({setChosenArticleData, chosenArticleId, setVotes})
        }, [setChosenArticleData])

    return (
        <>
        <ChosenArticlesContext.Provider value={{chosenArticleData}}>
            <ChosenArticleDisplay/>
            <VotingContainer votes={votes} setVotes={setVotes} chosenArticleId={chosenArticleId}/>
            <CommentsManager chosenArticleId={chosenArticleId.article_id}/>
        </ChosenArticlesContext.Provider>
        </>
            
        
    )
    
}