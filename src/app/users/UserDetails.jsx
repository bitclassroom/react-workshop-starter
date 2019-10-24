import React, { useState, useEffect } from 'react'

import { userService } from 'services/userService'

const UserDetails = props => {
    const {
        match: { params }
    } = props
    const [user, setUser] = useState(null)

    useEffect(() => {
        userService.fetchUser(params.userId).then(user => {
            setUser(user)
        })
    }, [params.userId])

    if (!user) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <p>{user.name}</p>
        </div>
    )
}

export default UserDetails
