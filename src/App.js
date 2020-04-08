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

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <div id="main_holder">
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App;
