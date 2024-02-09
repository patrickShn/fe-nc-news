import { useContext } from "react";
import { Link } from "react-router-dom";
import ErrContext from "../../context/errContext";
import UserContext from "../../context/UserContext";

export default function ErrorScreen () {

    
    const {loggedInUser} = useContext(UserContext)
    const {err, setError} = useContext(ErrContext)

    return (
        <>
        <h2><strong>Uh Oh! error!</strong> </h2>
        <p> There was a problem ⬇️ </p>
        <p>Thought I'd submit anyway, I am now realising that 
            <br/>
        specific errors will work better with specifc backend error messages</p>
        <Link to={`/${loggedInUser}/articles`}>
            <button onClick={(e) => {
                setError(null)}}>
            Back to all Articles
            </button>
        </Link>
        </>
    )
}