import React from 'react'

const PostItem = props => {
    const { isGrid, post } = props

    const title = isGrid ? post.shortTitle : post.title
    const body = isGrid ? post.shortBody : post.body

    return (
        <div className={`col s12 ${isGrid ? 'm4' : ''}`}>
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{title}</span>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    )
}

export default PostItem
