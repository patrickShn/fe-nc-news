import { useContext, useEffect, useState } from 'react';
import getAllUsers from '../../../components/utils/getAllUsers'
import { Link} from 'react-router-dom';

import UserCard from './UserCard'
import UserContext from '../../../context/UserContext'

export default function UsersList () {

    const [users,setUsers] = useState("")

const {loggedInUser} = useContext(UserContext)


    
    useEffect(()=> {
        getAllUsers({setUsers})
    }, [loggedInUser])


    return (
        <>
        <Link to={`/${loggedInUser}/articles`}>
            <button>Articles</button>
        </Link>
        <ul>
            {users&&users.map((user) => {
                return (
                    <div key={`${user.name} + ${user.username} + ${user.avatar_url}`}>
                    <UserCard userInfo={user}/>
                        </div>
                )
            })}
        </ul>
        </>
    )
}