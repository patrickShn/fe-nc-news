import UserContext from "../context/UserContext"
import { useContext } from "react"
import UsersList from "./UsersList"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';

export default function UserManager () {
const {loggedInUser} = useContext(UserContext)
    return (
        <>
        <p>Currently Logged in as<b>{loggedInUser}</b></p>
        <Link to="/">
            <Button variant="dark">All articles</Button>
        </Link>
        <Link to="/users">
            <Button variant="dark">Switch User</Button>
        </Link>
        </>

    )
}