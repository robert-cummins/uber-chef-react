import React from 'react'
import { connect } from 'react-redux'
import { fetchChefs } from '../actions/index'

class Chef extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchChefs(this.props.match.params.location))
    }

    render() {
        return (
            <>
                {this.props.chefs.map(chef => {
                    if (chef.chef_id == this.props.match.params.id) {
                        return (
                            <div class="row text-center">
                                <div class="col-sm-4 chef-button">
                                    <div class="text-center">
                                        <img class="chef-page-img" src={chef.img} alt={chef.name}/>

                                            <div class="chef-button">
                                                <form action="/delete-chef/{{chef.chef_id}}" method="POST">
                                                    <button id="delete" class="btn btn-danger chef-button ">Delete Profile</button>
                                                </form>
                                                <a href="/update-chef/{{chef.chef_id}}"><button id='update'
                                                class="btn btn-outline-success my-2 my-sm-0 submit" type="button">Update Profile</button></a>
                                            </div>
                                    </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <h1 class="ind-chef">{chef.name}</h1>
                                        <div class="container">
                                            <h2>Info:</h2>
                                            <p>{chef.bio}</p>
                                            <p><strong>Email:</strong>{chef.email}</p>
                                            <div class="row">
                                                <div class="col-sm-3">

                                                </div>
                                                <div class="col-sm-9">
                                                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"
                                                        style={{width: '60%', marginTop: '20px'}}>
                                                        <ol class="carousel-indicators">
                                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                                        </ol>
                                                        <div class="carousel-inner">
                                                            <div class="carousel-item active">
                                                                <img class="d-block w-100 food-img" src={chef.foodImg1} alt="First slide"/>
                                                            </div>
                                                            <div class="carousel-item">
                                                                <img class="d-block w-100 food-img" src={chef.foodImg2} alt="First slide"/>
                                                            </div>
                                                            <div class="carousel-item">
                                                                <img class="d-block w-100 food-img" src={chef.foodImg3} alt="First slide"/>
                                                            </div>
                                                        </div>
                                                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Previous</span>
                                                        </a>
                                                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                                        data-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="sr-only">Next</span>
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
        chefs: state.chefReducer
    }
                                
}
                                
export default connect(mapStateToProps)(Chef) 