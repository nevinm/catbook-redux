import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import CatForm from './CatForm';

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

  state = {
    isEditing: false,
  };

  filterCat = (id) => {
    const { cats } = this.props;
    return cats.find(cat => (cat.id === JSON.parse(id)));
  }

  catDisplayTemplate(cat) {
    return (
      <div>
        <h1>{cat.title}</h1>
        <p>Description: {cat.description}</p>
        <p>Body: {cat.body}</p>
      </div>
    );
  }

  startEditing = () => {
    this.setState({ isEditing: true });
  }

  render() {
    const { id } = this.props.params;
    const { isEditing } = this.state;
    const cat = this.filterCat(id);

    if(isEditing) {
      return <CatForm />;
    }

    return (
     <div className="col-md-8 col-md-offset-2">
       {cat && this.catDisplayTemplate(cat)}
       {!isEditing && <button onClick={this.startEditing} className="btn btn-warning">EDIT</button>}
     </div>
    );
  }
}

export default CatPage;
