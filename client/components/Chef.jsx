import React from 'react'
import { connect } from 'react-redux'
import { fetchChefs, deleteChef } from '../actions/index'
import { loginError } from '../actions/login'
import {Link} from 'react-router-dom'

class Chef extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchChefs(this.props.match.params.location))
        this.props.dispatch(loginError(''))
    }

    handleDelete = (e) => {
        this.props.dispatch(deleteChef(this.props.match.params.id))
        this.props.history.push('/' + 'chefs/' + this.props.match.params.location)
    }

    render() {
        return (
            <>
                {this.props.chefs.map((chef, i) => {
                    if (chef.chef_id == this.props.match.params.id) {
                        return (
                            <div key={i+100} className="row text-center">
                                <div className="col-sm-4 chef-button">
                                    <div className="text-center">
                                        <img className="chef-page-img" src={chef.chefImg} alt={chef.name}/>

                                            <div className="chef-button">
                                                
                                                    <button id="delete" onClick={this.handleDelete} className="btn btn-danger chef-button ">Delete Profile</button>
                                               
                                                <Link to={"/chefs/" + this.props.match.params.location + "/update/" + this.props.match.params.id}><button id='update'
                                                className="btn btn-outline-success my-2 my-sm-0 submit" type="button">Update Profile</button></Link>
                                            </div>
                                    </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <h1 className="ind-chef">{chef.name}</h1>
                                        <div className="container">
                                            <h2>Info:</h2>
                                            <p>{chef.bio}</p>
                                            <p><strong>Email:</strong>{chef.email}</p>
                                            <div className="row">
                                                <div className="col-sm-3">

                                                </div>
                                                <div className="col-sm-9">
                                                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"
                                                        style={{width: '60%', marginTop: '20px'}}>
                                                        <ol className="carousel-indicators">
                                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                                        </ol>
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active">
                                                                <img className="d-block w-100 food-img" src={chef.foodImg1} alt="First slide"/>
                                                            </div>
                                                            <div className="carousel-item">
                                                                <img className="d-block w-100 food-img" src={chef.foodImg2} alt="First slide"/>
                                                            </div>
                                                            <div className="carousel-item">
                                                                <img className="d-block w-100 food-img" src={chef.foodImg3} alt="First slide"/>
                                                            </div>
                                                        </div>
                                                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span className="sr-only">Previous</span>
                                                        </a>
                                                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                                        data-slide="next">
                                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span className="sr-only">Next</span>
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
            </>
                )
    }
}
                               
const mapStateToProps = (state) => {
    return {
      chefs: state.chefReducer,
      auth: state.auth
    }
  }
                                
export default connect(mapStateToProps)(Chef) 