import {useState } from "react";

import {Routes, Route} from 'react-router-dom'


import ChosenArticlePageManager from './chosenArticlePageManager/ChosenArticlePageManager'
import UsersList from './LoggedInUser/UsersList'
import ArticlesFeedManager from './ArticlesFeedManager/ArticleFeedManager'
import LandingPage from './landingPage/LandingPage'

import UserContext from '../../context/UserContext'
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import ErrContext from "../../context/errContext";



export default function AppManager () {
    
    const [loggedInUser, setLoggedInUser] = useState("tickle122")
    const [err, setError] = useState(null)
    
    return (
        <ErrContext.Provider value={{setError, err}}>
        <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="*" element={<ErrorScreen/>}/>
        <Route path={`/:userCurrentlyLoggedIn/users`} element={<UsersList/>}/>
        <Route path="/:userCurrentlyLoggedIn/articles" element={<ArticlesFeedManager/>}/>
        <Route path={`/:userCurrentlyLoggedIn/articles/:article_id`} element={<ChosenArticlePageManager/>}/>
        <Route path={`/:userCurrentlyLoggedIn/articles?:topic`} element={<ArticlesFeedManager/>}/>
         </Routes> 
        </UserContext.Provider>
        </ErrContext.Provider>
    

    )
}