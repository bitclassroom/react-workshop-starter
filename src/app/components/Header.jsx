import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../_context/AppContext'

const Header = props => {
    const { onChangeLayout, onChangeTheme } = useContext(AppContext)

    return (
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
                                <a onClick={onChangeLayout}>
                                    <i className="material-icons">view_module</i>
                                </a>
                            </li>
                            <li>
                                <a onClick={onChangeTheme}>
                                    <i className="material-icons">wb_incandescent</i>
                                </a>
                            </li>
                            <li>
                                <Link to="/posts/new">
                                    <i className="material-icons">wb_incandescent</i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
