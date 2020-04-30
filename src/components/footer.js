import React from 'react'


class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p>Copyright 2020 AJessen. CC BY-NC-ND 4.0 License</p>
                <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img id="ccLicense-footer-icon" alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>
                <a href="https://github.com/andrewtyl/www.ajessen.com/"><img id="github-footer-icon" src={require("../assets/GitHub-Mark-32px.png")} alt="View this Website on Github"/></a>
            </footer>
        )
    }
}

export default Footer