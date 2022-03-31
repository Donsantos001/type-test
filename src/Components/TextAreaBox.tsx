import React from 'react'
import { useUser } from '../Hooks/useUser'
import { Props as User } from '../Sections/List'

const TextAreaBox: React.FC<{ name: string }> = ({ name }) => {
    const { details, setDetails } = useUser()
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <textarea name={name} onChange={handleChange} value={details[name as keyof User["user"]]} />
        </div>
    )
}

export default TextAreaBox