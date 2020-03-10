import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Landing from './Landing'
import Chefs from './Chefs'
import Chef from './Chef'
import SignUp from './SignUp'
import LogIn from './LogIn'
import { connect } from 'react-redux'
import Update from './Update'


const App = () => {
  return (
    <>
    
    <Router>
      <Navbar/>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/sign-up" component={SignUp}/>
      <Route exact path="/log-in" component={LogIn}/>
      <Route exact path="/chefs/:location" component={Chefs}/>
      <Route exact path="/chefs/:location/:id" component={Chef}/>
      <Route exact path="/chefs/:location/update/:id" component={Update}/>
    </Router>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App) 
