import React from 'react'
import { connect } from 'react-redux'

class SignUp extends React.Component {
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
    // this.props.dispatch(postChef(this.state))
    this.props.history.push('/' + this.state.location)
  } 
  
  render() {
      return (
        <div class="container">
        <form class="sign-up-form" action="/" method="POST">
            <div class="form-group">
                <label htmlFor="exampleFormControlInput1">User Name</label>
                <input onChange={this.handleChange} name="user-name" type="text" class="form-control" id="exampleFormControlInput1" placeholder="User Name"/>
            </div>
            <div class="form-group">
                <label htmlFor="exampleFormControlInput1">Password</label>
                <input onChange={this.handleChange} name="password" type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password"/>
            </div>
            <button onClick={this.handleSubmit} type="submit" class="btn btn-primary submitnpm run debug
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