import React, { useContext } from 'react'
import { UserContext } from './context/user'

const Home = () => {
    const { user, loggedIn } = useContext(UserContext)

    if( loggedIn ) {
        return (
            <div>
                <h3>{user.username}'s Home Page</h3>
            </div>
        )
    } else {
        return (<h3>Please Login or Signup</h3>)
    }

}

export default Home


// import React, { useContext } from 'react'

// const Home = () => {
//     return(
//         <h3>Home</h3>
//     )
// }

// export default Home