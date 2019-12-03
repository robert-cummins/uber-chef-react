import React from 'react'
import { connect } from 'react-redux'
import { signIn, isAuthenticated } from 'authenticare/client'

class SignUp extends React.Component {
  constructor() {
      super()
      this.state = {
        email: '',
        password: ''
      }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(process.env.BASE_API_URL)
    signIn({
      username: this.state.email,
      password: this.state.password
    }, {
      baseUrl: process.env.BASE_API_URL // see .env and webpack.config.js
    })
      .then((token) => {
        if (isAuthenticated()) {
          props.history.push('/')
        }
      })
   
    // this.props.history.push('/' + this.state.location)
  } 
  
  render() {
      return (
        <div className="container">
        <form className="sign-up-form" action="/" method="POST">
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email</label>
                <input onChange={this.handleChange} name="email" type="text" className="form-control"  placeholder="email"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Password</label>
                <input onChange={this.handleChange} name="password" type="password" className="form-control"  placeholder="Password"/>
            </div>
            <button onClick={this.handleSubmit} type="submit" className="btn btn-primary submitnpm run debug
            ">Login</button>
        </form>
    </div>
      )
  }
}


const mapStateToProps = (state) => {
  return {
      chefs: state.chefReducer
  }

}

export default connect(mapStateToProps)(SignUp) 