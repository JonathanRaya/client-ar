import React from "react"
import { Navlink, Link } from"react-router-dom"

const Header = () => {

return(
    <header>
        <div className="header">
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <button className="header-buttons">Home</button>
            </Link>
            <Link to={'/about'} style={{textDecoration: 'none'}}>
                <button className="header-buttons">About Me</button>
            </Link>
            <Link to={'/contact'} style={{textDecoration: 'none'}}>
                <button className="header-buttons">Sign Up</button>
            </Link>
        </div>
    </header>
    )
}

export default Header