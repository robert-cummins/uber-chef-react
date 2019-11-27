import React from 'react'
import { connect } from 'react-redux'
import { fetchChefs } from '../actions/index'
import {Link} from 'react-router-dom'

class Chefs extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchChefs(this.props.match.params.location))
        console.log(this.props.chefs)
    }

    render() {
        return (
            <div class="row chef-container">
                {this.props.chefs.map(chef => {
                    return(
                    < div class = "col-3" >
                        <Link to={`${chef.location}/${chef.chef_id}`}><img class="chef-img" src={chef.img} alt="name"></img></Link>
                        <p class="chef-name">{chef.name}</p>
                        <p class="cuisine-text">{chef.cuisine}</p>
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
        chefs: state.getChefs
    }

}

export default connect(mapStateToProps)(Chefs) 