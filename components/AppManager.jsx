import { useDeferredValue, useEffect, useState } from "react";

import {Routes, Route} from 'react-router-dom'

import ArticlesList from './ArticlesList'

// import { useContext } from "react";
// import { ArticlesContext } from "./context/articlesContext";


export default function AppManager () {
    const [articles, setArticles] = useState()

    useEffect(() => {
        const fetchAllArticles = async () => {
            const articleQuery = await fetch(`https://be-nc-news-famm.onrender.com/api/articles`) 
            const response = await articleQuery.json()
            setArticles(response.articles)
        }
        fetchAllArticles()
    },[])

    return (
        // <Routes>
        //     <Route path="/" element={
            <ArticlesList articles={articles}/>
        //     }/>
        // </Routes>

    )
}