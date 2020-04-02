import React from 'react'
import '../styles/App.css';
import '../styles/normalize.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    constructor(props) {
        super();
        this.state = {
            url: "/"
        }
    }

    

    render() {
        let toRender = (<header><p>Hey, if you can see me in the browser, something broke.</p></header>)
        if (this.state.url === "/") {
            toRender = <header>
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
        }
        else if (this.state.url === "/services") {
            toRender = <header>
                <Link to="/">
                    <div id="ajessen-logo">
                        <img src={require('../assets/logo-raw.png')} alt="Ajessen Logo" />
                    </div>
                </Link>
                <nav>
                    <ul>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/services">
                            <li class="nav-current">Services and Skills</li>
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
        }
        else if (this.state.url === "/projects") {
            toRender = <header>
                <Link to="/">
                    <div id="ajessen-logo">
                        <img src={require('../assets/logo-raw.png')} alt="Ajessen Logo" />
                    </div>
                </Link>
                <nav>
                    <ul>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/services">
                            <li>Services and Skills</li>
                        </Link>
                        <Link to="/projects">
                            <li class="nav-current">Projects</li>
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
        }
        else if (this.state.url === "/about") {
            toRender = <header>
                <Link to="/">
                    <div id="ajessen-logo">
                        <img src={require('../assets/logo-raw.png')} alt="Ajessen Logo" />
                    </div>
                </Link>
                <nav>
                    <ul>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/services">
                            <li>Services and Skills</li>
                        </Link>
                        <Link to="/projects">
                            <li>Projects</li>
                        </Link>
                        <Link to="/about">
                            <li class="nav-current">About Me</li>
                        </Link>
                        <Link to="/contact">
                            <li>Contact Me</li>
                        </Link>
                    </ul>
                </nav>
            </header>
        }
        else if (this.state.url === "/contact") {
            toRender = <header>
                <Link to="/">
                    <div id="ajessen-logo">
                        <img src={require('../assets/logo-raw.png')} alt="Ajessen Logo" />
                    </div>
                </Link>
                <nav>
                    <ul>
                        <Link to="/">
                            <li>Home</li>
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
                            <li class="nav-current">Contact Me</li>
                        </Link>
                    </ul>
                </nav>
            </header>
        }
        else {
            toRender = <header>
                <Link to="/">
                    <div id="ajessen-logo">
                        <img src={require('../assets/logo-raw.png')} alt="Ajessen Logo" />
                    </div>
                </Link>
                <nav>
                    <ul>
                        <Link to="/">
                            <li>Home</li>
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
        }
        return (toRender)
    }
}

export default Header