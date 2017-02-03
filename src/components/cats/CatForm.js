import React, { Component, PropTypes } from 'react';
import connect from 'react-redux';

const { func } = PropTypes;

class CatForm extends Component {
  static propTypes = {
    addCat: func,
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

  render() {
    const { addCat } = this.props;

    return (
      <form>
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
            onChange={this.handleChange}
            type="text"
            className="form-control"
            id="description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body:</label>
          <input
            value={this.state.body}
            onChange={this.handleChange}
            type="text"
            className="form-control"
            id="body"
          />
        </div>
        <button type="submit" onClick={addCat} className="btn btn-success">Submit</button>
      </form>
    );
  }
}

export default CatForm;
