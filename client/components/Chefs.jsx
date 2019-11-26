import React from 'react'
import {connect} from 'react-redux'
import {fetchChefs} from '../actions/index'

class Chefs extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchChefs(this.props.match.params.id))
      }

      render(){
         return <h1>Chefs</h1>
      }
}

const mapStateToProps = (state) => {
    return {
        chefs: state.chefs
    }
  }

export default connect(mapStateToProps)(Chefs) 