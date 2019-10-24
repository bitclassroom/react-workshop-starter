import React, { useContext } from 'react'

import AppContext from 'app/context/AppContext'
import ErrorBoundary from 'app/components/ErrorBoundary'

import UsersList from './UsersList'

const UsersPage = () => {
    const { changeTheme } = useContext(AppContext)
    return (
        <div>
            <h1>USERS</h1>
            <input type="button" onClick={changeTheme} value="Change theme" />
            <ErrorBoundary>
                <UsersList />
            </ErrorBoundary>
        </div>
    )
}

export default UsersPage
