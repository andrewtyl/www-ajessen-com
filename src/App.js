import React, { Component } from 'react';
import './styles//App.css';
import './styles/normalize.css'
import Header from './components/header'
import Home from './components/home'
import Projects from './components/projects'
import Services from './components/services'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FourOhFour from './components/404';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/services" exact component={Services} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route component={FourOhFour} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App;
