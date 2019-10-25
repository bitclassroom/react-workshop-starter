import React from 'react'
import Modal from '../components/Modal'

const NewUser = ({ history }) => {
    const dismiss = () => {
        history.push('/')
    }

    return (
        <Modal onDismiss={dismiss}>
            <form className="">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="icon_prefix" type="text" className="validate" />
                                <label htmlFor="icon_prefix">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <i className="material-icons prefix">phone</i>
                                <input id="icon_telephone" type="tel" className="validate" />
                                <label htmlFor="icon_telephone">Telephone</label>
                            </div>
                        </div>
                    </form>
                </div>
            </form>
        </Modal>
    )
}

export default NewUser
