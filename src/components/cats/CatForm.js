import React, { Component, PropTypes } from 'react';
import * as catActions from '../../actions/catActions.js';
import connect from 'react-redux';

const { func, object, bool } = PropTypes;

@connect(state => ({

}), {
  updateCat: catActions.updateCat,
})
class CatForm extends Component {
  static propTypes = {
    cat: object,
    addCat: func,
    cancelFunc: func,
    saveFunc: func,
    updateFunc: func,
    isEdit: bool, // Adding a new cat - !isEdit
  };

  static defaultProps = {
    cat: {
      title: '',
      description: '',
      body: '',
    },
    isEdit: true,
  };

  state = {
    cat: {
      title: this.props.cat.title,
      description: this.props.cat.description,
      body: this.props.cat.body,
    }
  };

  handleChange = (key) => (event) => {
    const { cat } = this.state;
    cat[key] = event.target.value;
    this.setState({ cat: cat });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addCat(event, this.state.cat);
  }

  updateFunc = () => {

  }

  render() {
    const { cancelFunc, isEdit, saveFunc, updateFunc } = this.props;
    const { cat } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            value={cat.title}
            onChange={this.handleChange('title')}
            type="text"
            className="form-control"
            id="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            value={cat.description}
            onChange={this.handleChange('description')}
            type="text"
            className="form-control"
            id="description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body:</label>
          <input
            value={cat.body}
            onChange={this.handleChange('body')}
            type="text"
            className="form-control"
            id="body"
          />
        </div>
        {isEdit && <button type="submit" onClick={updateFunc} className="btn btn-success ">Save</button>}
        {!isEdit && <button type="submit" onClick={saveFunc}  className="btn btn-success">Submit</button>}
        <button type="button" onClick={() => cancelFunc()} className="btn btn-default">Cancel</button>
      </form>
    );
  }
}

export default CatForm;
