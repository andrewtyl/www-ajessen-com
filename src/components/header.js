import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <header>
                <div id="logo">
                    <img src={require('../assets/logo-raw.png')} alt="Ajessen Logo" />
                </div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Services and Skills</a>
                    <a href="#">Projects</a>
                    <a href="#">About Me</a>
                    <a href="#">Contact Me</a>
                </nav>
            </header>
        )
    }
}

export default Header