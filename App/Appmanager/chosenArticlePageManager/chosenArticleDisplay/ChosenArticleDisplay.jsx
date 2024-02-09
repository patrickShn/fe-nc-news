import {Link} from 'react-router-dom'

import { ChosenArticleContext } from '../../../../context/ChosenarticleContext'
import { useContext } from 'react'
import UserContext from '../../../../context/UserContext'

export default function ChosenArticleDisplay (){

    const {chosenArticleData} = useContext(ChosenArticleContext)
    

    const {loggedInUser} = useContext(UserContext)

    if (chosenArticleData.length === 0){
        return (
            <div>
                loading...
            </div>
        )
    }

    setTimeout(() => {
        
    })

            const {author, title, article_img_url} = chosenArticleData.articles
    return (
        <>
         <Link to={`/${loggedInUser}/articles`} >Articles</Link>
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
        </div>
        </>
    )

}