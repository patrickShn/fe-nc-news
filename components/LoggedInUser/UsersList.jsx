import { useEffect, useState } from 'react';
import getAllUsers from '../../utils/getAllUsers';
import { Link } from 'react-router-dom';

import UserCard from './UserCard'

export default function UsersList () {

    const [users,setUsers] = useState("")


    useEffect(()=> {
        getAllUsers({setUsers})
    }, [])


    return (
        <>
        
        <ul>
            {users&&users.map((user) => {
                return (
                    <div key={`${user.name} + ${user.username} + ${user.avatar_url}`}>
                    <UserCard user={user}/>
                        </div>
                )
            })}
        </ul>
        </>
    )
}