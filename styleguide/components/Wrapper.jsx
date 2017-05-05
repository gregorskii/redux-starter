import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';

import store from 'src/store';

class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    children: null
  };

  render() {
    return (
      <Provider store={store}>
        <MemoryRouter>
          {this.props.children}
        </MemoryRouter>
      </Provider>
    );
  }
}

export default Wrapper;
