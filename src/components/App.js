import React, { Component, PropTypes } from 'react';
import Header from './common/Header';
import CatPage from './cats/CatPage';

export default class App extends Component {

  render() {
    return (
      <div className="container-fluid">
       <Header />
       <CatPage />
       {this.props.children}
     </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};
