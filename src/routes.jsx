import React from 'react';
import {
  Route,
  BrowserRouter
} from 'react-router-dom';

import App from 'components/app';
import Home from 'pages/home';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/test" render={() => (<div>Test</div>)} />
      </App>
    </BrowserRouter>
  );
};

export default AppRouter;
