import { useEffect, useState } from "react"

import ChosenArticleDisplay from "./ChosenArticleDisplay";

export default function ChosenArticlePage ({chosenArticleId}) {

    const [chosenArticleData, setChosenArticleData] = useState([])


    useEffect(() => {
        const fetchSpecificArticle =  async () => {
            const SpecificArticleQuery = await fetch(`https://be-nc-news-famm.onrender.com/api/articles/${chosenArticleId.article_id}`)
            const response = await SpecificArticleQuery.json()
            setChosenArticleData(response)
    };fetchSpecificArticle()
        }, [])
    

    return (
            <ChosenArticleDisplay chosenArticleData={chosenArticleData}/>
            
        
    )
    
}