import { useContext } from "react"
import { Link} from "react-router-dom"
import UserContext from "../../../context/UserContext"

export default function LandingPage (){

    const {loggedInUser} = useContext(UserContext)


    return (
        <>
        <h2> you're on the the landing page </h2>
        <Link to={`/${loggedInUser}/articles`}>
        <button>Click here to see all articles</button>
        </Link>
        <Link to={`/${loggedInUser}/users`}>
        <button>click here to log in </button>
        </Link>
        </>
    )
}