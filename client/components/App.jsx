import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Navbar from './Navbar'
import Landing from './Landing'
import Chefs from './Chefs'


const App = () => {
  return (
    <>
    <Navbar/>
    <Router>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/:id" component={Chefs}/>
    </Router>
    </>
  )
}

export default App
