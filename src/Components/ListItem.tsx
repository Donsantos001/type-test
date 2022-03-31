import React from 'react'
import { Props } from '../Sections/List'

const ListItem: React.FC<Props> = ({ user }) => {
    return (
        <tr>
            <td><img src={user.imageurl} width={100} height={100} alt="" /></td>
            <td><span>{user.username}</span></td>
            <td><span>{user.age}</span></td>
            <td><span>{user.note}</span></td>
        </tr>
    )
}

export default ListItem