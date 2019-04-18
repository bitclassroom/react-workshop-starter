import React, { useContext } from 'react'
import AppContext from '../_context/AppContext'

const AboutPage = () => {
    const { isLight } = useContext(AppContext)

    const itemStyle = isLight ? 'white' : 'blue-grey darken-1'
    const textStyle = isLight ? 'black-text' : 'white-text'

    return (
        <div className={`card-panel ${itemStyle}`}>
            <h1 className={textStyle}>This is About page</h1>
            <p className={textStyle}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum in veritatis dolorum
                doloremque nisi accusamus nostrum, enim qui, beatae assumenda fugiat quis dolore
                voluptatem aperiam possimus hic! Eveniet, id aliquam.
            </p>
            <p className={textStyle}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum in veritatis dolorum
                doloremque nisi accusamus nostrum, enim qui, beatae assumenda fugiat quis dolore
                voluptatem aperiam possimus hic! Eveniet, id aliquam.
            </p>
        </div>
    )
}

export default AboutPage
