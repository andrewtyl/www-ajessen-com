import React from 'react'
import '../styles/App.css';
import '../styles/normalize.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to="/">
                    <div id="ajessen-logo">
                        <img src={require('../assets/logo-raw.png')} alt="Ajessen Logo" />
                    </div>
                </Link>
                <nav>
                    <ul>
                        <Link to="/">
                            <li class="nav-current">Home</li>
                        </Link>
                        <Link to="/services">
                            <li>Services and Skills</li>
                        </Link>
                        <Link to="/projects">
                            <li>Projects</li>
                        </Link>
                        <Link to="/about">
                            <li>About Me</li>
                        </Link>
                        <Link to="/contact">
                            <li>Contact Me</li>
                        </Link>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header