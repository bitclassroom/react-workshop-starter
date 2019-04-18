import React, { Component } from 'react'
import PostList from './PostList'
import { postsService } from '../../services/postsService'

class PostsPage extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.loadPosts()
    }

    loadPosts() {
        postsService.fetchPosts().then(posts => {
            this.setState({
                posts: posts
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Posts Page</h1>
                <PostList posts={this.state.posts} isGrid={this.props.isGrid} />
            </div>
        )
    }
}

export default PostsPage
