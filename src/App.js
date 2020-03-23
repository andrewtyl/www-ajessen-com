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
import {BrowserRouter as BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Home />
        <Services />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
