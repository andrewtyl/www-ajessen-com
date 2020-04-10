import React from 'react'

let projectList = [
    {
        title: "FizzBuzz",
        imgSrc: require('../assets/fizzbuzz.png'),
        imgAlt: "FizzBuzz code",
        text: `This is my take on "FizzBuzz", which is a common test script where the console counts up from 1 to a certain number and replaces numbers divisible by 3 with "Fizz", numbers divisible by 5 with "Buzz", and number divisible by both 3 and 5 with "FizzBuzz". I coded this script with the intention that Fizz and Buzz can be set to any number, and not just 3 and 5.`,
        URL: "https://github.com/andrewtyl/fizzbuzz"
    },
    {
        title: "Mario Party 4, Hide and Go Boom Simulator",
        imgSrc: require('../assets/mp4HideAndGoBoom.png'),
        imgAlt: "An example of the code from the minigame simulator being ran.",
        text: `So, I was playing Mario Party 4 (my favorite one, and the one I grew up on) and as I kept playing the minigame "Hide and Go Boom", I realized it's entirely chance based. But what are the odds? Does the 1 have the advantage, or do the 3, or is it actually 50/50? Well, rather than simply write down and calculate the statistics myself, I decided to program a simulation based off of the minigame mechanics, run it a thousandish times, and see how many times each team wins. Links to more information about the minigame are available in the read me file.`,
        URL: "https://github.com/andrewtyl/mp4HideAndGoBoom"
    },
    {
        title: "Bowser's Big Blast Simulator, from the Mario Party Series",
        imgSrc: require('../assets/bowsersBigBlast.png'),
        imgAlt: "An example of the code from the minigame simulator being ran.",
        text: `After making a mass simulator for Mario Party 4's "Hide and Go Boom" minigame, the next natural step was to do one for probably the most popular chance based minigame in the Mario Party series, Bowser's Big Blast. This minigame has appeared in Mario Party 2, Mario Party the Top 100, and Mario Party 4 (my personal favorite) under the name Bowser's Bigger Blast. Assuming each Mario Party engine uses RNG in this game properly, does player order actually make a difference? Does the first person to go have an advantage, or does the second? Sure there are varying chances in each turn, but I mean overall. So, I made this mass simulator to put it to the test. Links to more information about the minigame are available in the read me file.`,
        URL: "https://github.com/andrewtyl/BowsersBigBlastSimulator"
    },
    {
        title: "SFC Planet Field Simulation",
        imgSrc: require('../assets/sfcPlanetField.png'),
        imgAlt: "An example of the code from the mass simulator being ran.",
        text: `Blue Frog Gaming has a series of online, HTML based games, the first of which was "Starfleet Commander." Over time, they would launch additional "unvierses" that allow for a fresh start for players and may alter some gameplay aspects, such as Extreme which doubles the speed of building and Nova which increases the original speed by 1.5 and added in some new ships among other features. I started playing them years back, starting with X2, and only recently got into them again, and plan to use all my skills to bring me to the top of the leader board in my main universe (X6 as of writing this.) What I am focusing on today is colonization and planet fields. When you start the game, you have an initial home planet with 163 fields. Fields are the amount of spaces you have to build your planet's buildings on. 1 building = 1 field. Upgrading a building also takes up a field. When you unlock the Gaia ship, you unlock the ability to colonize new planets, where you start over buildings but maintain your research and can even transport resources and ships between the planets you own. When you colonize a planet, it is given a random number of fields based off of a number of factors, such as planet slot. While you would likely only build your main buildings up to a certain point (Capitol to level 10, Shipyard to level 13, factory to level 4, etc.), having more fields means you can upgrade your energy producing buildings and mines up, which will give you a faster rate of resources over time. The most you can ever get is 320 fields, so ideally you'd want all planets to have that 320 slot (most people keep their homeworld still, and will actually be content with a planet field of 200 or more, while abandoning any planets they colonize that have less than 200 fields). So my question here is this. What are the actual odds of getting a 320 field planet? Links to more information about the game and how planet simulation works are available in the read me file.`,
        URL: "https://github.com/andrewtyl/SFC_Planet_Field_Sim"
    },
    {
        title: "Express Boilerplate",
        imgSrc: require('../assets/expressBoilerplate.png'),
        imgAlt: "Examples of the code",
        text: `This is a very simple Express.js boilerplate, used for starting new projects that run on Express.js. The read me includes instructions on setting up the boilerplate as well as deploying to Heroku.`,
        URL: "https://github.com/andrewtyl/express-boilerplate_andrewtyl"
    },
    {
        title: "www.AJessen.com",
        imgSrc: "https://picsum.photos/800/600",
        //imgSrc: require('../assets/wwwajessencom.png'),
        imgAlt: "The project's webpage on AJessen.com.",
        text: `This is a very simple Express.js boilerplate, used for starting new projects that run on Express.js. The read me includes instructions on setting up the boilerplate as well as deploying to Heroku.`,
        URL: "https://github.com/andrewtyl/express-boilerplate_andrewtyl"
    }

]


class Projects extends React.Component {
       render() {
        return (
            <main id="projects">
                <h1 style={{'text-align': 'center'}}>Projects</h1>
                {projectList.map(({title, imgSrc, imgAlt, text, URL}) => (
                    <div className="project" key={title.replace(" ", "-")}>
                        <h2>{title}</h2>
                        <img src={imgSrc} alt={imgAlt} />
                        <p>{text} You can find this project <a href={URL}>here</a>.</p>
                    </div>
                ))}
            </main>
        )
       }
}

export default Projects