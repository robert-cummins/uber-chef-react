import React from 'react'
import { Link } from 'react-router-dom'
import { fetchChefs } from '../actions/index'
import { connect } from 'react-redux'


class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cuisineId: "cuisine_id=201"
        }
    }

    handleCuisineChange = e => {
        this.setState({ cuisineId: e.target.value })
    }

    handleSubmit = e => {
        this.props.dispatch(fetchChefs(this.props.chefs[0].location, this.state.cuisineId))
    }


    render() {

        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand mb-0 h1 logo-full">Uber<span className="logoChef">Chef</span></span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0 " id="cuisine-form">
                        {this.props.chefs[0] &&
                            <>
                                <select onChange={this.handleCuisineChange} className="form-control" id="cuisine-select" name="cuisine_id">
                                    <option value="cuisine_id=201">Mexican</option>
                                    <option value="cuisine_id=202">Italian</option>
                                    <option value="cuisine_id=203">French</option>
                                    <option value="cuisine_id=204">Thai</option>
                                    <option value="cuisine_id=205">Indian</option>
                                    <option value="cuisine_id=206">Japenese</option>
                                    <option value="cuisine_id=207">American</option>
                                    <option value="cuisine_id=208">Malaysian</option>
                                    <option value="cuisine_id=210">Greek</option>
                                </select>
                                <button onClick={this.handleSubmit} type="submit" className="btn btn-outline-success my-2 my-sm-0 submit cuisine-submit" id="cuisine-submit" type="button">Search Style</button>
                            </>
                        }
                    </form>
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a href="/"><button className="btn btn-outline-success my-2 my-sm-0 submit cuisine-submit" type="button">Home</button></a>
                        </li>
                        <li className="nav-item active">
                            <Link to={'/sign-up'}><button id="sign-in" className="btn btn-outline-success my-2 my-sm-0 submit cuisine-submit" type="button">Sign Up</button></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/log-in"><button id="sign-in" className="btn btn-outline-success my-2 my-sm-0 submit cuisine-submit" type="button">Log-in</button></Link>
                        </li>
                    </div>


                </div>
            </nav>
        )
    }

}



const mapStateToProps = (state) => {
    return {
        chefs: state.chefReducer
    }

}

export default connect(mapStateToProps)(Navbar) 