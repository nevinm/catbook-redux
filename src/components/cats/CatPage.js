import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

const { array, object } = PropTypes;

@connect(state => ({
  cats: state.cats,
}), {})
class CatPage extends Component {
  static propTypes = {
    cats: array,
    params: object,
  };

  static defaultProps = {
    cats: [],
    params: {},
  };

  filterCat = (id) => {
    const { cats } = this.props;
    return cats.find(cat => (cat.id === JSON.parse(id)));
  }

  catTemplate(cat) {
      return (
        <div>
          <h1>{cat.title}</h1>
          <p>User Id: {cat.userId}</p>
          <p>Body: {cat.body}</p>
        </div>
      );
  }

  render() {
    const { id } = this.props.params;
    const cat = this.filterCat(id);

    return (
     <div className="col-md-8 col-md-offset-2">
       {cat && this.catTemplate(cat)}
     </div>
    );
  }
}

export default CatPage;
