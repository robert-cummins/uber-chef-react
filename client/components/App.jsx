import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Landing from './Landing'
import Chefs from './Chefs'
import Chef from './Chef'
import SignUp from './SignUp'
import LogIn from './LogIn'


const App = () => {
  return (
    <>
    
    <Router>
      <Navbar/>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/chefs/sign-up" component={SignUp}/>
      <Route exact path="/log-in" component={LogIn}/>
      <Route exact path="/:location" component={Chefs}/>
      <Route exact path="/:location/:id" component={Chef}/>
    </Router>
    </>
  )
}

export default App
