import Header from './Header'
import AppManager from './AppManager'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import UserManager from './LoggedInUser/UserManager'
import UserContext from './context/UserContext'



function App() {

  const [loggedInUser, setLoggedInUser] = useState("Select user")


  return (
    <>
   <Header/>
<UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
   <UserManager/>
   <AppManager/>
</UserContext.Provider>

    </>
  )
}

export default App
