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

    async loadPosts() {
        try {
            const posts = await postsService.fetchPosts()

            this.setState({ posts })
        } catch (error) {
            alert('This is err')
        }
    }

    render() {
        return (
            <div>
                <h3>Posts Page</h3>
                <PostList posts={this.state.posts} />
            </div>
        )
    }
}

export default PostsPage
