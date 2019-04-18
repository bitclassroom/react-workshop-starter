import React from 'react'
import PostItem from './PostItem'

const PostList = props => {
    const { posts, isGrid } = props

    if (posts.length === 0) {
        return <h4>Loading...</h4>
    }

    return (
        <div className="row">
            {posts.map(post => (
                <PostItem post={post} isGrid={isGrid} />
            ))}
        </div>
    )
}

export default PostList
