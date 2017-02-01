import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

const { object } = PropTypes;

class CatPage extends Component {
  static propTypes = {
    cat: object.isRequired,
  };

  render() {
    const { cat } = this.props;
    console.log('cat-->', cat);
    return (
     <div className="col-md-8 col-md-offset-2">
       <h1>{cat.name}</h1>
       <p>breed: {cat.breed}</p>
       <p>weight: {cat.weight}</p>
       <p>temperament: {cat.temperament}</p>
     </div>
    );
  }
}

export default CatPage;
