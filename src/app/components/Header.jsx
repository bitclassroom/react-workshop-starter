import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../_context/AppContext'
import LanguageContext from '../_context/LanguageContext'

const Header = props => {
    const lng = useContext(LanguageContext)
    const { onThemeLayout, onChangeLayout } = useContext(AppContext)

    const aboutText = lng === 'sr' ? 'O nama' : 'About'

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
                                <Link to="/about">{aboutText}</Link>
                            </li>
                            <li onClick={onChangeLayout}>
                                <a>
                                    <i className="material-icons">view_module</i>
                                </a>
                            </li>
                            <li onClick={onThemeLayout}>
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
}

export default Header
