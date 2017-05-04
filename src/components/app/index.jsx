import React from 'react';

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'styles/base.global.scss';

const App = ({ children }) => (<div className="container">{children}</div>);

App.propTypes = {
  children: React.PropTypes.node
};

App.defaultProps = {
  children: null
};

export default App;
