import React from 'react'


class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p>Copyright 2020 AJessen. Apache 2.0 License. </p><a href="https://github.com/andrewtyl/www.ajessen.com/"><img id="github-footer-icon" src={require("../assets/GitHub-Mark-32px.png")} alt="View this Website on Github"/></a>
            </footer>
        )
    }
}

export default Footer