import React from 'react'
import { connect } from 'react-redux'
import { loginUser, loginError } from '../actions/login'
import {fetchChefByEmail} from '../actions/index'

class LogIn extends React.Component {
  constructor() {
      super()
      this.state = {
        email: "",
        password: ""
      }
  }

  componentDidMount() {
    this.props.dispatch(loginError(''))
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let { email, password } = this.state
    this.props.dispatch(loginUser({ email, password }))
    .then(() => {
      // if(this.props.auth.isAuthenticated){
      //   this.props.history.push('/' + this.state.location)
      // }
      this.props.dispatch(fetchChefByEmail(this.props.auth.user.user_email))
      console.log(this.props.auth.user.user_email)
    })
  } 
  
  render() {
      return (
        <div className="container">
        <form className="sign-up-form" action="/" method="POST">
        {this.props.auth.errorMessage &&
           <>
            <h1>
             <span className='badge badge-danger badge-lg'>
               {this.props.auth.errorMessage}
             </span>
            </h1>
           <br></br>
          </>
        }
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email</label>
          <input onChange={this.handleChange} name="email" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput2">Password</label>
          <input onChange={this.handleChange} name="password" type="password" className="form-control" id="exampleFormControlInput2" placeholder="Password"/>
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