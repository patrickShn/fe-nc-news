import { useContext } from "react"
import { Button } from "react-bootstrap"
import UserContext from '../../../context/UserContext'
import Swal from 'sweetalert2'
import { Link} from "react-router-dom"



export default function UserCard ({userInfo}) {
    
    const {setLoggedInUser, loggedInUser} = useContext(UserContext)
    const {username,avatar_url} = userInfo

    const handleSwitchUser = (e) => {
        if (username === loggedInUser ){
            alert(`you're already logged in as ${username}`)
        } else {
            setLoggedInUser(username);
                Swal.fire({
                    title: `logged in as ${username}!`,
                    text: "",
                    timer: 2000,
                });
            }
    }

    return (
        <>
        <form className="userSelectCard">
            {username} 
            <img src={avatar_url} alt={`${username} profile img`} className={"userImg"} />
            <Link to={`/${loggedInUser}/users`}>
            <Button variant="primary" onClick={handleSwitchUser}>Log in</Button>
            </Link>
        </form>
            </>
    )

}