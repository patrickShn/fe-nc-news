import {useContext, useEffect, useState } from "react";

import {Routes, Route, Link} from 'react-router-dom'

import ArticlesList from './ArticlesFeed/ArticlesList'

import ChosenArticlePageManager from "./chosenArticlePage/ChosenArticlePageManager";

import fetchAllArticles from "../utils/fetchAllArticles";
import UsersList from "./LoggedInUser/UsersList";




export default function AppManager () {
    const [articles, setArticles] = useState()



    useEffect(() => {
        fetchAllArticles(setArticles)
    },[])


    return (
        <>
        <Routes>
            <Route path="/" element={
                <ArticlesList articles={articles}/>
            }/> 
        <Route path="/users" element={<UsersList/>}/>
        <Route path={`/articles/:article_id`} element={<ChosenArticlePageManager/>}/>
         </Routes> 
            </>

    )
}