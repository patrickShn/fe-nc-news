import {useEffect, useState } from "react";

import {Routes, Route} from 'react-router-dom'

import ArticlesList from './ArticlesFeed/ArticlesList'

import ChosenArticlePageManager from "./chosenArticlePage/ChosenArticlePageManager";

import fetchAllArticles from "../utils/fetchAllArticles";

export default function AppManager () {
    const [articles, setArticles] = useState()
    const [chosenArticleId, setChosenArticleId] = useState("")



    useEffect(() => {
        fetchAllArticles(setArticles)
    },[])

    return (
        <>
        {/* <NavBar/> */}
        <Routes>
            <Route path="/" element={
                <ArticlesList articles={articles} setChosenArticleId={setChosenArticleId}/>
            }/> 
        <Route path={`/articles/:article_id`} element={<ChosenArticlePageManager chosenArticleId={chosenArticleId}/>}/>
         </Routes> 
            </>

    )
}