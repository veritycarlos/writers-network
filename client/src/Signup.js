import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
// import { useHistory } from 'react-router-dom'

const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const {signup} = useContext(UserContext)
    // const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup'), {
            // config obj
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                // what we're sending to backend
                username: username,     
                password: password,
                password_confirmation: passwordConfirmation

            })
        }
        .then(res => res.json())
        .then(user => {
            if (!user.errors){
                signup(user)
                // history.push('/')
            } else {
                setUsername("")
                setPassword("")
                setPasswordConfirmation("")
                const errorLis = user.errors.map(e => <li>{e}</li>)
                setErrorsList(errorLis)
            }            
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input 
                    type="text"
                    id="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /> <br/>
                <label>Password:</label>
                <input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Confirm Password:</label>
                <input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                /> <br/>
                <imput type="submit" />
            </form>
            <ul>
                {errorsList}
            </ul>
        </div>
    )
}

export default Signup