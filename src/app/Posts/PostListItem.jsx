import React, { useContext, useState } from 'react'

import AppContext from '../_context/AppContext'

const PostListItem = ({ post }) => {
    const { isGrid, isLight } = useContext(AppContext)

    const [selected, setSelected] = useState(false)
    const [count, setCount] = useState(0)

    const cardSize = isGrid ? 'm4' : ''
    const cardStyle = isLight ? 'white' : 'blue-grey darken-1'
    const textStyle = isLight ? '' : 'white-text'

    const selectCard = () => {
        setSelected(!selected)
        setCount(count + 1)
    }

    return (
        <div className={`col s12 ${cardSize}`}>
            <div className={`card ${cardStyle}`}>
                <div className={`card-content ${textStyle}`}>
                    <span className="card-title">{isGrid ? post.shortTitle : post.title}</span>
                    <p>{isGrid ? post.shortBody : post.body}</p>
                </div>
                <div onClick={selectCard} className={`card-action ${selected ? 'red' : ''}`}>
                    <span>Select card ( click count: {count} )</span>
                </div>
            </div>
        </div>
    )
}

export default PostListItem
