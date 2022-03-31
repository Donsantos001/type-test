import React from 'react'
import { useUser } from '../Hooks/useUser'
import InputBox from '../Components/InputBox'
import TextAreaBox from '../Components/TextAreaBox'

const AddUser = () => {
    const { users, setUsers, details, setDetails } = useUser()
    const initailState = {
        username: "",
        age: 0,
        imageurl: "",
        note: "",
    }

    const addUser = () => {
        if (details.username === "") {
            alert("Please enter username")
            return
        }
        if (details.age === 0) {
            alert("Please enter age")
            return
        }
        if (details.imageurl === "") {
            alert("Please enter imageurl")
            return
        }
        setUsers([...users, details])
        setDetails(initailState)
    }

    return (
        <div>
            <h2>Add new User</h2>
            <p>Username</p>
            <InputBox name={"username"}/>
            <p>Age</p>
            <InputBox name={"age"}/>
            <p>Imageurl</p>
            <InputBox name={"imageurl"} />
            <p>Note</p>
            <TextAreaBox name={"note"}/>
            <button onClick={addUser}>Add User</button>
        </div>
    )
}

export default AddUser