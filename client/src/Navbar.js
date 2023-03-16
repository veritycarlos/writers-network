import React, { useContext} from 'react'
import { UserContext } from './context/user'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const {user, logout} = useContext(UserContext)

    const logoutUser = () => {
        fetch('/logout')
        .then(() => {
            logout()
        })
    }

    if (user) {
        return (
            <div>
                <h1>Welcome {user.username}</h1>
                <br/>
                <button onClick={logoutUser}>Logout</button>
            </div>
        )
    } else {
        return (
            <div>
                <NavLink to='/login'>
                    <button>Login</button>
                </NavLink>
            </div>
        )
    } 

}

export default Navbar
