import React, { useContext } from 'react'
import { UserContext } from '../App'

function Login() {
  const { user, setUser } = useContext(UserContext)
  return(
    <>
   <h1>Log In</h1>
   {!user &&
  <button onClick={()=>setUser('Janice')}>LOGIN</button>
  }
  </>
  )
}
export default Login