import { useContext } from "react"
import { Link} from "react-router-dom"
import UserContext from "../../../context/UserContext"

export default function LandingPage (){

    const {loggedInUser} = useContext(UserContext)


    return (
        <div className="landingPage">
        <h2> Welcome!... </h2>
        <div className="landPageBtnContainer">
        <Link to={`/${loggedInUser}/articles`}>
        <button className="landPgBtn">Click here to see all articles</button>
        </Link>
        <Link to={`/${loggedInUser}/users`}>
        <button className="landPgBtn">click here to log in </button>
        </Link>
        </div>
        </div>
    )
}