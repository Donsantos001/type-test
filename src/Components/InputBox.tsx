import React from 'react'
import { useUser } from '../Hooks/useUser'
import { Props as User } from '../Sections/List'

const InputBox: React.FC<{name: string}> = ({ name }) => {
    const {details ,setDetails} = useUser()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <input type={name === "age" ? "number" : "text"} name={name} onChange={handleChange} value={details[name as keyof User["user"]]}></input>
        </div>
    )
}

export default InputBox