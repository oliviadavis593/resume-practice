import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import WorkHistory from './WorkHistory'
import Contact from './Contact';
import Home from './Home'
import Nav from './Nav'


class App extends Component {
  render() {
    return(
      <>
      <nav>
        <Nav />
      </nav>
      <header>
        <h1>Resume</h1>
      </header>
      <main>
        <Route exact path='/' component={Home}/>
        <Route path='/work-history' component={WorkHistory}/>
        <Route path='/contact' component={Contact}/>
      </main>
      </>
    )
  }
}

export default App; 