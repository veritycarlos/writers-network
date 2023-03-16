import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
// import { useHistory } from 'react-router-dom'

const Signup = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const {signup} = useContext(UserContext)
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