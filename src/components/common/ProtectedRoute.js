import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  const auth = window.localStorage.getItem('userLevel');

  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth !== 'admin')
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location
                }
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
