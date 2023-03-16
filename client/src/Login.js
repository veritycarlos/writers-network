import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
// import { useHistory } from 'react-router-dom'

const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [error, setError] = useState("")
    const {login} = useContext(UserContext)
       // const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /> <br/>
                <label>Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <br/>
                <input type="submit" />
            </form>
            <ul>
                <h3>{error}</h3>
            </ul>
        </div>
    )
}
end 