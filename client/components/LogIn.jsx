import React from 'react'
import { connect } from 'react-redux'
import { loginUser, loginError } from '../actions/login'

class LogIn extends React.Component {
  constructor() {
      super()
      this.state = {
        
      }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(postChef(this.state))
    this.props.history.push('/' + this.state.location)
  } 
  
  render() {
      return (
        <div className="container">
        <form className="sign-up-form" action="/" method="POST">
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">User Name</label>
                <input onChange={this.handleChange} name="user-name" type="text" className="form-control" id="exampleFormControlInput1" placeholder="User Name"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Password</label>
                <input onChange={this.handleChange} name="password" type="password" className="form-control" id="exampleFormControlInput1" placeholder="Password"/>
            </div>
            <button onClick={this.handleSubmit} type="submit" className="btn btn-primary submitnpm run debug
            ">Login</button>
        </form>
    </div>
      )
  }
}


const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(LogIn) 