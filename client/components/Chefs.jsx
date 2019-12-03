import React from 'react'
import { connect } from 'react-redux'
import { fetchChefs } from '../actions/index'
import {Link} from 'react-router-dom'

class Chefs extends React.Component {
    componentDidMount() {
        if(this.props.location.search == ''){
            this.props.dispatch(fetchChefs(this.props.match.params.location))
        } else{
            this.props.dispatch(fetchChefs(this.props.match.params.location, this.props.location.search))
        }
        
    }

    // componentDidUpdate(){
    //     this.props.dispatch(fetchChefs(this.props.match.params.location))
    // }

    render() {
        return (
            <div className="row chef-container">
                {this.props.chefs.map(chef => {
                    return(
                    < div className = "col-3" >
                        <Link to={`${chef.location}/${chef.chef_id}`}><img className="chef-img" src={chef.img} alt="name"></img></Link>
                        <p className="chef-name">{chef.name}</p>
                        <p className="cuisine-text">{chef.cuisine}</p>
                    </div>
                    )
                })
            }
                
            </div >
         )
      }
}

const mapStateToProps = (state) => {
    return {
        chefs: state.chefReducer
    }

}

export default connect(mapStateToProps)(Chefs) 