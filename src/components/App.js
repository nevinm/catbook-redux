import React, { Component, PropTypes } from 'react';
import Header from './common/Header';
import CatsPage from './cats/CatsPage';

export default class App extends Component {

  render() {
    return (
      <div className="container-fluid">
       <Header />
       <CatsPage />
       {this.props.children}
     </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};
