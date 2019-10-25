import React from 'react'
import { Link } from 'react-router-dom'
import { withAppContext } from 'app/context/AppContext'

const Header = ({ title = '', global }) => (
    <header style={{ backgroundColor: 'green' }}>
        <nav className={`${global.theme === 'dark' ? 'black' : 'red'} darken-2`}>
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo card-title">
                        {title}
                    </Link>
                    <ul className="right">
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users/new">New user</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)

export default withAppContext(Header)
