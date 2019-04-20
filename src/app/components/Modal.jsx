import React, { useState } from 'react'
import { createPortal } from 'react-dom'

const Modal = props => {
    const [open, setOpen] = useState(true)

    const { title, actions, children } = props
    const { onDismiss } = props

    return createPortal(
        <div className={`modal blue ${open ? 'open' : 'close'}`}>
            <div className="modal-content">
                <h4>{title}</h4>
                {children}
            </div>
            {actions}
            <input type="button" value="Dismis" onClick={onDismiss} />
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal
