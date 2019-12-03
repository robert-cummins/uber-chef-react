import React from 'react'
import {postChef} from '../actions/index'
import { connect } from 'react-redux'
import { register, isAuthenticated } from 'authenticare/client'

class SignUp extends React.Component {
  constructor() {
      super()
      this.state = {
        name: 'name',
        chefImg: 'https://apsec.iafor.org/wp-content/uploads/sites/37/2017/02/IAFOR-Blank-Avatar-Image.jpg',
        username: 'name@example.com',
        location: 'Wellington',
        bio: 'Write a short Bio',
        cuisine: 201,
        foodImg1: 'Img1',
        foodImg2: 'Img2',
        foodImg3: 'Img3',
        password: null
      }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    
  }

  handleSubmit = (e) => {
    console.log(process.env.BASE_API_URL)
    e.preventDefault()
    register(this.state,{
      baseUrl: process.env.BASE_API_URL  
    })
      .then((token) => {
        console.log('hello')
        if (isAuthenticated()) {
          console.log('hello')
            this.props.dispatch(postChef(this.state))
            this.props.history.push('/' + this.state.location)
            props.history.push('/')
        }
      })
  }
  
  

  
  render() {
      return (
        <div class="container">
        <form class="sign-up-form" action="/" method="POST">
            <div class="form-group">
                <label htmlFor="exampleFormControlInput1">Full Name</label>
                <input onChange={this.handleChange} name="name" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
            </div>
            <div class="form-group">
                <label htmlFor="exampleFormControlInput1">Profile Picture</label>
                <input onChange={this.handleChange} name="chefImg" type="text" class="form-control" id="exampleFormControlInput1" placeholder="img"/>
            </div>
            <div class="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input onChange={this.handleChange} name="username" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="form-group">
                <label htmlFor="exampleFormControlSelect1">Location</label>
                <select onChange={this.handleChange} name="location" class="form-control" id="exampleFormControlSelect1">
                    <option value="Wellington">Wellington</option>
                    <option value="Christchurch">Christchurch</option>
                    <option value="Auckland">Auckland</option>
                    <option value="Hamilton">Hamilton</option>
                </select>
            </div>
            <div class="form-group">
                <label htmlFor="exampleFormControlTextarea1">Write a Short Bio</label>
                <textarea onChange={this.handleChange} name="bio" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label htmlFor="exampleFormControlSelect1">Choose Your speciality</label>
                <select onChange={this.handleChange} name="cuisine" class="form-control" id="exampleFormControlSelect1">
                    <option value={201}>Mexican</option>
                    <option value={202}>Italian</option>
                    <option value={203}>French</option>
                    <option value={204}>Thai</option>
                    <option value={205}>Indian</option>
                    <option value={206}>Japenese</option>
                    <option value={207}>American</option>
                    <option value={208}>Malaysian</option>
                    <option value={210}>Greek</option>
                </select>
            </div>
            <div class="form-group">
                <label htmlFor="exampleFormControlInput1">Provide 3 Example Images Of Your Food</label>
                <input onChange={this.handleChange} name="foodImg1" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Img1"/>
                <input onChange={this.handleChange} name="foodImg2" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Img2"/>
                <input onChange={this.handleChange} name="foodImg3" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Img3"/>
            </div>
            <div class='form-group'>
                <label htmlFor="exampleFormControlInput1">Password</label>
                <input onChange={this.handleChange} type="password" name="password" placeholder="Password"></input>
            </div>
            <button onClick={this.handleSubmit} type="submit" class="btn btn-primary submitnpm run debug">Submit</button>
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