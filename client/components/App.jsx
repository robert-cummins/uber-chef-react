import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Navbar from './Navbar'
import Landing from './Landing'


const App = () => {
  return (
    <>
    <Navbar/>
    <Router>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/:id"/>
    </Router>
    </>
  )
}

export default App
