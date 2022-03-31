import React from 'react'
import { UserContext } from '../Contexts/UserContext'

export const useUser = () => {
    return React.useContext(UserContext)
}