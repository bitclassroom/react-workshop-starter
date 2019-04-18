import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => (
    <header>
        <nav className="red darken-2">
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo card-title">
                        {props.title}
                    </Link>
                    <ul className="right">
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <a
                                onClick={e => {
                                    e.preventDefault()
                                    props.onSwitchView()
                                }}
                            >
                                <i className="material-icons">view_module</i>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="material-icons">wb_incandescent</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)

export default Header
