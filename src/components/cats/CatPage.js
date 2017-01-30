import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as catActions from '../../actions/catActions.js';
import CatList from './CatList';

@connect(state => ({
  // State from global state goes here
  cats: state.cats,
}), {
  // Actions will be recieved here

})
class CatPage extends Component {

  render() {
    return (
      <div className="col-md-12">
        <h1>Cats</h1>
        <div className="col-md-4">
          <CatList cats={this.props.cats} />
        </div>
      </div>
    );
  }
}

CatPage.propTypes = {
  cats: PropTypes.array
}

export default CatPage;
