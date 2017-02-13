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
    showNewAdditionForm: false,
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

  toggleForm = (key) => {
    this.setState({
      [key]: !this.state[key],
     });
  }

  addCat = (event, cat) => {
    this.props.addCat(cat);
  }

  render() {
    const { id } = this.props.params;
    const { isEditing, showNewAdditionForm } = this.state;
    const cat = this.filterCat(id);

    if(showNewAdditionForm) {
      return <CatForm isEdit={showNewAdditionForm} addCat={this.addCat} cancelFunc={() => this.toggleForm('showNewAdditionForm')} />;
    }

    if(isEditing) {
      return <CatForm isEdit={isEditing} cat={cat} addCat={this.addCat} cancelFunc={() => this.toggleForm('isEditing')} />;
    }

    return (
     <div className="col-md-8 col-md-offset-2">
       {cat && this.catDisplayTemplate(cat)}
       {!isEditing && <button onClick={() => this.toggleForm('isEditing')} className="btn btn-warning">EDIT</button>}
       {!showNewAdditionForm && <button onClick={() => this.toggleForm('showNewAdditionForm')} className="btn btn-success">Add new</button>}
     </div>
    );
  }
}

export default CatPage;
