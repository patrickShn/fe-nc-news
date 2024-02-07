import axios from 'axios'

export default async function getAllUsers({setUsers}){
    const userQuery = await axios.get(`https://be-nc-news-famm.onrender.com/api/users`) 
    const response = userQuery.data.users
    setUsers(response)

}