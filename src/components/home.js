import React from 'react'


class Home extends React.Component {

    render() {
        return (
            <div id="home">    
                <main>     
                    <h1>AJessen</h1>    
                    <h2>Founded by Andrew Jessen-Tyler</h2>     
                    <ul>     
                        <li>Web Development</li>     
                        <li>PC Builds</li>     
                        <li>IT Solutions</li>     
                    </ul>
                    <p id="home-contact"><a href="/contact">Contact Now</a></p>
                </main>
                <article id="homepage_featured_project">
                    <h3>Featured Project: Contact Tracker (API)</h3>
                    <img src={require('../assets/contactTrackerAPI.png')} alt="Featured Project"></img>
                    <p>This Express App is used for storing contacts securely in a PostgreSQL server. It uses AES256 encryption to store all the contact information The Express App also uses HTTPS and will enforce connections to use it. If you want to try this yourself, you will need to be manually registered. Contact me if you are interested. You can view the full source code <a href="https://github.com/andrewtyl/contact-tracker-api">here</a>.</p>
                </article>
            </div>    
        )
    }
}

export default Home