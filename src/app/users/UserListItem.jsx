import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from 'app/context/AppContext'

const UserListItem = ({ user }) => {
    const { name, email, website } = user
    const { theme } = useContext(AppContext)

    const listStyle = theme === 'dark' ? ' black' : ''

    return (
        <li className={`collection-item avatar${listStyle}`}>
            <img src="images/yuna.jpg" alt="" className="circle" />
            <Link to={`/users/${user.id}`}>
                <span className="title">{name}</span>
            </Link>
            <p>
                {email} <br />
                {website}
            </p>
            {/* <a href="#!" className="secondary-content">
                <i className="material-icons">grade</i>
            </a> */}
        </li>
    )
}

export default UserListItem
