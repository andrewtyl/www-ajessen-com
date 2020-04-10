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
                    <h3>Featured Project: This Website!</h3>
                    <img src={require('../assets/wwwajessencom.png')} alt="Featured Project"></img>
                    <p>This website has so far been my best looking front-end project I've completed since graduating Thinkful. While not heavy on the React features aside from routing and navLink, the CSS on desktop with an animated navBar was fun to work on. I do want to impliment a "carousel" feature later, which will improve not only the presentation on both desktop and mobile, but also the user experience on mobile devices. Due to the lack of a carousel feature, I decided the presentation was best for now on mobile in a "dekstop" view. The site will need a massive rework for mobile-first, at which time I hope my UI skills have improved. I expect to continue to update it as my skills are refined and improve over the coming years. You can view the source code <a href="https://github.com/andrewtyl/www.ajessen.com/">here</a>.</p>
                </article>
            </div>    
        )
    }
}

export default Home