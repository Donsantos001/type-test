import React from 'react'
import ListItem from '../Components/ListItem'
import { useUser } from '../Hooks/useUser'

export interface Props {
    user: {
        username: string,
        age: number,
        imageurl: string,
        note?: string
    }
}

const List = () => {
    const { users } = useUser()

    const generateList = () => {
        return users.map((user, index) => {
            return <ListItem key={index} user={user} />
        })
    }

    return (
        <div>
            <h2>My User Lists</h2>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Username</th>
                        <th>Age</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    {generateList()}
                </tbody>
            </table>
        </div>
    )
}

export default List