import React from 'react'

class Contact extends React.Component {
    render() {
        return (
            <main id="contact">
                <h1>Contact Me</h1>
                <div id="contact-holder">
                    <ul>
                        <li>
                            <p><a href="emailto:ajessen@ajessen.com">Email: ajessen@ajessen.com</a></p>
                        </li>
                        <li>
                            <img className="contact-icons" id="linkedIn-contact-icon" src={require("../assets/LI-Logo.png")} alt="LinkedIn Icon" href="https://www.linkedin.com/in/andrew-j-017b4b9a/" />
                        </li><li><div id="github-contact-holder">
                            <img className="contact-icons" id="github-contact-logo" src={require("../assets/GitHub_Logo.png")} alt="Github Icon" href="https://github.com/andrewtyl" />
                            <img className="contact-icons" id="github-contact-icon" src={require("../assets/GitHub-Mark-120px-plus.png")} alt="Github Icon" href="https://github.com/andrewtyl" />
                        </div>
                        </li>
                    </ul>
                </div>
            </main>
        )
    }
}

export default Contact