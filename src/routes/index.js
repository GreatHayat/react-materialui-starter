import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../components/hoc/PrivateRoute';
import routesList from './routesList';
import { ROLES } from '../utils/constants';

const routeTypes = {
  public: 'public',
  private: 'private',
};

const Routes = () => (
  <>
    <Switch>
      {routesList.map((route) =>
        route.type === routeTypes.public ? (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.compoennt}
            roles={route.roles || [ROLES.ADMIN, ROLES.USER]}
          />
        ) : (
          <PrivateRoute
            path={route.path}
            exact={route.exact}
            component={route.compoennt}
            roles={route.roles || [ROLES.ADMIN, ROLES.USER]}
          />
        )
      )}
    </Switch>
  </>
);

export default Routes;
