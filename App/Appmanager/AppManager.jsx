import {useState } from "react";

import {Routes, Route} from 'react-router-dom'


import ChosenArticlePageManager from './chosenArticlePageManager/ChosenArticlePageManager'
import UsersList from './LoggedInUser/UsersList'
import ArticlesFeedManager from './ArticlesFeedManager/ArticleFeedManager'
import LandingPage from './landingPage/LandingPage'

import UserContext from '../../context/UserContext'




export default function AppManager () {
   
    const [loggedInUser, setLoggedInUser] = useState("tickle122")


    return (
        <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
        <Route path={`/:loggedInUser/users`} element={<UsersList/>}/>
        <Route path="/:loggedInUser/articles/" element={<ArticlesFeedManager/>}/>
        <Route path={`/:user/articles/:article_id`} element={<ChosenArticlePageManager/>}/>
         </Routes> 
        </UserContext.Provider>
    

    )
}