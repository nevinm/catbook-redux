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
class CatsPage extends Component {
  const { cats, children } = this.props;

  render() {
    return (
      <div className="col-md-12">
        <h1>Cats</h1>
        <div className="col-md-4">
          <CatList cats={cats} />
        </div>
        <div className="col-md-8">
          {children}
        </div>
      </div>
    );
  }
}

CatsPage.propTypes = {
  cats: PropTypes.array
}

export default CatsPage;
