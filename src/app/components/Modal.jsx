import React from 'react'
import ReactDOM from 'react-dom'

const Modal = props => {
    return ReactDOM.createPortal(<p>{props.children}</p>, document.querySelector('.modal'))
}

export default Modal
