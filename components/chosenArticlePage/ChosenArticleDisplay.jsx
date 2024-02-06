import {Link} from 'react-router-dom'

import { ChosenArticlesContext } from '../context/ChosenarticlesContext'
import { useContext } from 'react'

export default function ChosenArticleDisplay (){

    const {chosenArticleData} = useContext(ChosenArticlesContext)

    if (chosenArticleData.length === 0){
        return (
            <div>
                loading...
            </div>
        )
    }

            const {author, title, article_img_url} = chosenArticleData.articles
    return (
        <>
        <div className="ArticleBody">
        <h3>{title} - {author}</h3> 
        <img src={article_img_url} alt={`${title}'s image`} className="ArticleBodyImg" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eum exercitationem nobis 
            nostrum at, quis blanditiis sit, maiores aperiam veritatis quibusdam excepturi nisi. 
            Quidem delectus praesentium vel dignissimos ullam est! 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Fugit blanditiis cumque impedit consectetur perspiciatis, 
            ducimus unde nesciunt non cum mollitia repellendus, corrupti eius qui, 
            nemo totam facere quidem nam eos.
        <Link to="/">
        <button> Back To All Articles</button>
        </Link>
        </div>
        </>
    )

}