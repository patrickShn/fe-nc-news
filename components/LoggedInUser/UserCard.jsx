import { useContext } from "react"
import { Button } from "react-bootstrap"
import UserContext from "../context/UserContext"
import Swal from 'sweetalert2'
import { Link } from "react-router-dom"

export default function UserCard ({user}) {

    const {setLoggedInUser, loggedInUser} = useContext(UserContext)
    const {username, name, avatar_url} = user
    return (
        <form className="userSelectCard">
            {username} 
            <img src={avatar_url} alt={`${username} profile img`} className={"userImg"} />
            <Link to="/">
            <Button variant="primary" onClick={ (e) => {
                if (username === loggedInUser ){
                    alert(`you're already logged in as ${username}`)
                } else {
                setLoggedInUser(username)
                Swal.fire({
                    title: `logged in as ${username}!`,
                    text: "",
                    timer: 2000,
                });
            }
            }}>Log in</Button>
            </Link>
        </form>
    )

}