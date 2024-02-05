import {useEffect, useState } from "react";

import {Routes, Route} from 'react-router-dom'

import ArticlesList from './ArticlesFeed/ArticlesList'

import NavBar from "./navBar/NavBar";

import ChosenArticlePage from "./chosenArticlePage/ChosenArticlePage";


export default function AppManager () {
    const [articles, setArticles] = useState()
    const [chosenArticleId, setChosenArticleId] = useState("")
console.log(chosenArticleId)
    useEffect(() => {
        const fetchAllArticles = async () => {
            const articleQuery = await fetch(`https://be-nc-news-famm.onrender.com/api/articles`) 
            const response = await articleQuery.json()
            setArticles(response.articles)
        }
        fetchAllArticles()
    },[setChosenArticleId])

    return (
        <>
        <NavBar/>
        <Routes>
            <Route path="/" element={
                <ArticlesList articles={articles} setChosenArticleId={setChosenArticleId}/>
            }/> 
        <Route path={`/articles/${chosenArticleId.article_id}`} element={<ChosenArticlePage chosenArticleId={chosenArticleId}/>}/>
         </Routes> 
            </>

    )
}