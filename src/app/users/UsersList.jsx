import React, { useState, useEffect } from 'react'

import { userService } from 'services/userService'

import UserListItem from './UserListItem'

const UsersList = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        loadUsers()
        return () => {}
    }, [])

    const loadUsers = async () => {
        try {
            const users = await userService.fetchUsers()
            setUsers(prevUsers => {
                return [...users, ...prevUsers]
            })
        } catch (error) {
            setError(error)
        }
    }

    if (error) {
        throw Error('Something went wrong')
    }

    return (
        <ul className="collection">
            {users.map(user => (
                <UserListItem key={user.id} user={user} />
            ))}
        </ul>
    )
}

export default UsersList
