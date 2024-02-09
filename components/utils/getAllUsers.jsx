import axios from 'axios'

export default async function getAllUsers({setUsers, setError}){

    try {
    const userQuery = await axios.get(`https://be-nc-news-famm.onrender.com/api/users`) 
    const response = userQuery.data.users
    setUsers(response)
    } catch (err) {
        setError(err)
    }

}