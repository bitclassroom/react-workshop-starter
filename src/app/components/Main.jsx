import React from 'react'
import { Route } from 'react-router-dom'

import AboutPage from '../About/AboutPage'
import PostsPage from '../Posts/PostsPage'

const Main = props => {
    return (
        <main className="container">
            <Route path="/about" component={AboutPage} />
            <Route exact path="/" render={() => <PostsPage isGrid={props.isGrid} />} />
        </main>
    )
}

export default Main
