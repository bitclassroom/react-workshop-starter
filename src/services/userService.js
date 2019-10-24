import { API } from 'shared/api'

import User from 'models/User'

export class UserService {
    fetchUsers() {
        // Fetch your users
        return API.get('/users').then(response => {
            console.log('response', response)

            const { data: users } = response

            console.log('API users', users)

            const myUsers = users.map(user => new User(user))
            console.log('myUsers', myUsers)
            return myUsers
        })
    }

    fetchUser(userId) {
        return API.get(`/users/${userId}`).then(response => {
            const { data: user } = response

            return new User(user)
        })
    }
}

export const userService = new UserService()
