import {useEffect, useState } from "react"

import ChosenArticleDisplay from "./chosenArticleDisplay/ChosenArticleDisplay"
import CommentsManager from "./comments/commentsManager"
import VotingManager from "./voting manager/VotingManager"
import { ChosenArticleContext } from "../../../context/ChosenarticleContext";

import fetchSpecificArticle from '../../../components/utils/fetchSpecifcArticle'
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
            <VotingManager votes={votes} setVotes={setVotes} article_id={article_id}/>
            <CommentsManager article_id={article_id}/>
        </ChosenArticleContext.Provider>
        </>
            
        
    )
    
}