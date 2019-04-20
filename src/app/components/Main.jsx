import React from 'react'
import { Route } from 'react-router-dom'

import AboutPage from '../About/AboutPage'
import PostsPage from '../Posts/PostsPage'
import NewPost from '../Posts/NewPost'

const Main = () => {
    return (
        <main className="container">
            <Route path="/about" component={AboutPage} />
            <Route path="/posts/new" component={NewPost} />
            <Route exact path="/" component={PostsPage} />
        </main>
    )
}

export default Main
