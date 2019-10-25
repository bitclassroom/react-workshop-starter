import React from 'react'
import { Switch, Route } from 'react-router-dom'

import UsersPage from './users/UsersPage'
import AboutPage from './about/AboutPage'
import UserDetails from './users/UserDetails'
import NewUser from './users/AddUser'

const Main = () => (
    <main className="container">
        <Switch>
            <Route path="/about" component={AboutPage} />
            <Route exact path="/users/new" component={NewUser} />
            <Route path="/users/:userId" component={UserDetails} />
            <Route exact path="/" component={UsersPage} />
            <Route>
                <h1>Not Found</h1>
            </Route>
        </Switch>
    </main>
)

export default Main
