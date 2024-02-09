import {useContext, useEffect, useState } from "react"

import { Link } from "react-router-dom"

import ChosenArticleDisplay from "./chosenArticleDisplay/ChosenArticleDisplay"
import CommentsManager from "./comments/commentsManager"
import VotingManager from "./voting manager/VotingManager"
import { ChosenArticleContext } from "../../../context/ChosenarticleContext";

import fetchSpecificArticle from '../../../components/utils/fetchSpecifcArticle'
import { useParams } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import ErrContext from "../../../context/errContext"
import ErrorScreen from "../../ErrorScreen/ErrorScreen"

export default function ChosenArticlePageManager () {

    

    const [chosenArticleData, setChosenArticleData] = useState([])
    const [votes, setVotes] = useState(0)
    const [loading, setloading] = useState(false)

    const {loggedInUser} = useContext(UserContext)
    const {setError, err} = useContext(ErrContext)



    const {article_id} = useParams()



    useEffect(() => {
        setTimeout(() => {
            setloading(false);
          }, 5000);
    fetchSpecificArticle({setChosenArticleData, article_id, setVotes, setError})
        }, [setChosenArticleData])



        if (err){
            return (
                <ErrorScreen/>
            )
        }

        
    if (loading){
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <>
      logged in as : {loggedInUser} <Link to={`/${loggedInUser}/users`}>Switch user</Link>
        <ChosenArticleContext.Provider value={{chosenArticleData}}>
            <ChosenArticleDisplay/>
            <VotingManager votes={votes} setVotes={setVotes} article_id={article_id}/>
            <CommentsManager article_id={article_id}/>
        </ChosenArticleContext.Provider>
        </>
            
        
    )
    
}