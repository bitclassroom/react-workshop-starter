import React from 'react'
import { Route } from 'react-router-dom'

import AboutPage from '../About/AboutPage'
import PostsPage from '../Posts/PostsPage'

const Main = () => {
    return (
        <main className="container">
            <Route path="/about" component={AboutPage} />
            <Route exact path="/" component={PostsPage} />
        </main>
    )
}

export default Main
