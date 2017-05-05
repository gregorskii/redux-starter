import React from 'react';

const App = ({ children }) => (<div className="container">{children}</div>);

App.propTypes = {
  children: React.PropTypes.node
};

App.defaultProps = {
  children: null
};

export default App;
