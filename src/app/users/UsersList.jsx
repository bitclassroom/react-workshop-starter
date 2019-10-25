import React, { useState, useEffect } from 'react'

import { userService } from 'services/userService'

import UserListItem from './UserListItem'
import InputField from 'app/components/InputField'

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

    const _searchUsers = searchText => {
        const searchUsers = users.filter(user => {
            return user.name.toLowerCase().includes(searchText.toLowerCase())
        })

        setUsers(searchUsers)
    }

    if (error) {
        throw Error('Something went wrong')
    }

    return (
        <React.Fragment>
            <InputField type="search" onType={_searchUsers} placeholder={'Search users'} />
            {users.map(user => (
                <UserListItem key={user.id} user={user} />
            ))}
        </React.Fragment>
    )
}

export default UsersList
