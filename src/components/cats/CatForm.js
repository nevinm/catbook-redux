import React, { Component, PropTypes } from 'react';
import connect from 'react-redux';

const { func } = PropTypes;

class CatForm extends Component {
  static propTypes = {
    addCat: func,
    cancelFunc: func,
  };

  state = {
    cat: {
      title: '',
      description: '',
      body: '',
    }
  }

  handleChange = (key) => (event) => {
    const { cat } = this.state;
    cat[key] = event.target.value;
    this.setState({ cat: cat });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addCat(event, this.state.cat);
  }

  render() {
    const { cancelFunc } = this.props;
    const { cat } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            value={this.state.title}
            onChange={this.handleChange('title')}
            type="text"
            className="form-control"
            id="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            value={this.state.description}
            onChange={this.handleChange('description')}
            type="text"
            className="form-control"
            id="description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body:</label>
          <input
            value={this.state.body}
            onChange={this.handleChange('body')}
            type="text"
            className="form-control"
            id="body"
          />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
        <button type="button" onClick={cancelFunc} className="btn btn-default">Cancel</button>
      </form>
    );
  }
}

export default CatForm;
