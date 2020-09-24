import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import routes from './routes';

const App = (props) => {
  function renderRoutes(routes, contextPath) {
    const children = [];

    const renderRoute = (item, routeContextPath) => {
      let newContextPath = item.path ? `${routeContextPath}/${item.path}` : routeContextPath;
      newContextPath = newContextPath.replace(/\/+/g, '/');
      console.log(newContextPath);
      if (!item.component) return;

      if (item.childRoutes) {
      } else {
        children.push(<Route key={newContextPath} component={item.component} path={newContextPath} exact />);
      }
    };

    routes.forEach((item) => renderRoute(item, contextPath));

    return <Switch>{children}</Switch>;
  }

  const children = renderRoutes(routes, '/');

  return <BrowserRouter>{children}</BrowserRouter>;
};

export default App;
