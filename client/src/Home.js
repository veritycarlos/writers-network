import React, { useContext } from 'react'
import { UserContext } from './context/user'

const Home = () => {
    const { user } = useContext(UserContext)

    if( !user || user.error ) {
        return (<h3>Please Login or Signup</h3>)
    } else {
        return (
            <div>
                <h3>{user.username}</h3>
            </div>
          )
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