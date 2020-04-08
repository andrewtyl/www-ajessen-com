import React from 'react'


class Home extends React.Component {

    render() {
        return (
            <div id="home-temp">
                <main>
                <h1 style={{'text-align': 'center'}}>Home</h1>
                </main>
                <article id="homepage_featured_project">
                    <h3>Featured Project: This Website!</h3>
                    <img src="https://picsum.photos/800/600" alt="Featured Project"></img>
                    <p>This website has so far been my most ambitious project I've completed since graduating Thinkful. While not heavy on the React features aside from routing and navLink, the CSS has been worked on extensively to provide a mobile-first view with seemless transitions between each "tab." I expect to continue to update it as my skills are refined and improve over the coming years. You can view the source code <a href="https://github.com/andrewtyl/www.ajessen.com/">here</a>.</p>
                </article>
            </div>
        )
    }
}

export default Home