import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import CatForm from './CatForm';
import * as catActions from '../../actions/catActions';

const { array, object, func } = PropTypes;

@connect(state => ({
  cats: state.cats,
}), {
  addCat: catActions.addCat,
})
class CatPage extends Component {
  static propTypes = {
    cats: array,
    params: object,
    addCat: func,
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

  addCat = (event, cat) => {
    this.props.addCat(cat);
  }

  cancelEditing = () => {
    this.setState({ isEditing: false });
  }

  render() {
    const { id } = this.props.params;
    const { isEditing } = this.state;
    const cat = this.filterCat(id);

    if(isEditing) {
      return <CatForm addCat={this.addCat} cancelCat={this.cancelEditing} />;
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
