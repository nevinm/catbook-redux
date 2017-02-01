import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as catActions from '../../actions/catActions.js';
import CatList from './CatList';
import CatPage from './CatPage';

@connect(state => ({
  // State from global state goes here
  cats: state.cats,
}), {
  // Actions will be recieved here

})
class CatsPage extends Component {

  render() {
    // Children will also include the nested component - CatPage from routes.js
    const { cats, children } = this.props;

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
  cats: PropTypes.array,
  children: PropTypes.node,
}

export default CatsPage;
