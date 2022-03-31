import React from 'react'
import { UserProvider } from '../Contexts/UserContext'
import AddUser from '../Sections/AddUser'
import List from '../Sections/List'

const Home = () => {


    return (
        <UserProvider>
            <div>
                <p>Home</p>
                <AddUser />
                <List />
            </div>
        </UserProvider>
    )
}

export default Home