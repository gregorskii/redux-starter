import React from 'react';
import PropTypes from 'prop-types';

const App = ({ children }) => (<div className="container-fluid">{children}</div>);

App.propTypes = {
  children: PropTypes.node
};

App.defaultProps = {
  children: null
};

export default App;
