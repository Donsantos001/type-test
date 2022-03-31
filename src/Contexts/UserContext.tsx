import React, { useState } from 'react'

export interface Props {
    user: {
        username: string,
        age: number,
        imageurl: string,
        note?: string
    },
    context: {
        users: Props["user"][],
        setUsers: (users: Props["user"][]) => void,
        details: Props["user"],
        setDetails: (details: Props["user"]) => void,
    }
}


export const UserContext = React.createContext<Props["context"]>({} as Props["context"])

export const UserProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const [users, setUsers] = useState<Props["user"][]>([
        {
            username: "Sanni",
            age: 20,
            imageurl: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            note: "I am a good",
        },
        {
            username: "Sanni",
            age: 40,
            imageurl: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        }
    ])

    const [details, setDetails] = useState<Props["user"]>({
        username: "",
        age: 0,
        imageurl: "",
        note: "",
    })

    return (
        <UserContext.Provider value={{ users, setUsers, details, setDetails }}>
            {children}
        </UserContext.Provider>
    )
}