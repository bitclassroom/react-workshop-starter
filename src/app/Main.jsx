import React from 'react'
import UsersPage from './users/UsersPage'
import { Switch, Route } from 'react-router-dom'
import AboutPage from './about/AboutPage'
import UserDetails from './users/UserDetails'

const Main = () => (
    <main className="container">
        <Switch>
            <Route path="/about" component={AboutPage} />
            <Route path="/users/:userId" component={UserDetails} />
            <Route exact path="/" component={UsersPage} />
            <Route
                render={() => {
                    return <h1>Not Found</h1>
                }}
            />
        </Switch>
    </main>
)

export default Main
