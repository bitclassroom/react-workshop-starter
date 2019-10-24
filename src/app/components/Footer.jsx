import React from 'react'
import { withRouter } from 'react-router-dom'

const Footer = () => (
    <footer className="page-footer red darken-2">
        <div className="footer-copyright">
            <div className="container">© {new Date().getFullYear()} Copyright BIT</div>
        </div>
    </footer>
)

export default withRouter(Footer)
