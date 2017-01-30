import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as catActions from '../../actions/catActions.js';

@connect(state => ({
  // State from global state goes here
  cats: state.cats,
}), {
  // Actions will be recieved here

})
class CatPage extends Component {

  render() {
    console.log('cats---->', this.props.cats)
    return(
      <h1>test</h1>
    );
  }
}

CatPage.propTypes = {
  cats: PropTypes.array
}

export default CatPage;
