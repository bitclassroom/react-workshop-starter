import React, { useContext, useState } from 'react'
import AppContext from '../_context/AppContext'

const PostItem = props => {
    const [selected, setSelected] = useState(false)
    const [count, setCount] = useState(0)

    const { isGrid, isLight } = useContext(AppContext)

    const { post } = props

    const title = isGrid ? post.shortTitle : post.title
    const body = isGrid ? post.shortBody : post.body
    const itemStyle = isLight ? 'white' : 'blue-grey darken-1'
    const textStyle = isLight ? 'black-text' : 'white-text'

    const selectedStyle = selected ? 'red' : ''

    const selectCard = () => {
        setSelected(selected => !selected)
        setCount(count => count + 1)
    }

    return (
        <div className={`col s12 ${isGrid ? 'm4' : ''}`}>
            <div className={`card ${itemStyle}`}>
                <div className={`card-content ${textStyle}`}>
                    <span className="card-title">{title}</span>
                    <p>{body}</p>
                </div>
                <div onClick={selectCard} className={`card-action ${selectedStyle}`}>
                    This is a link (cliked {count})
                </div>
            </div>
        </div>
    )
}

export default PostItem
