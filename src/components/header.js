import React from 'react'
import '../styles//App.css';
import '../styles/normalize.css';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component {

    render() {

        let navItems = [
            { path: '/', text: 'Home' , classname: ""},
            { path: '/services', text: 'Services and Skills', classname: "" },
            { path: '/projects', text: 'Projects', classname: "" },
            { path: '/about', text: 'About Me', classname: "" },
            { path: '/contact', text: 'Contact Me', classname: "" },
        ]

        return (
            <header>
                <Link to="/">
                    <div id="ajessen-logo">
                        <img src={require('../assets/logo-raw.png')} alt="Ajessen Logo" />
                    </div>
                </Link>
                <nav>
                    <ul>
                        {navItems.map(({ path, text }) => (
                            <NavLink key={path} exact to={path} activeClassName="nav-current"><li>{text}</li></NavLink>
                        ))}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header