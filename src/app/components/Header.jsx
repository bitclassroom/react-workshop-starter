import React from 'react'

const Header = ({ title = 'title' }) => (
    <header>
        <nav>{title}</nav>
    </header>
)

export default Header
