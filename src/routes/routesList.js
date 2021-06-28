import Dashboard from '../containers/Dashboard';
// import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Organization from '../pages/Organization';
import Settings from '../pages/Settings';
import { ROLES } from '../utils/constants';

const routeTypes = {
  public: 'public',
  private: 'private',
};

const routesList = [
  {
    path: '/',
    compoennt: Login,
    exact: true,
    type: routeTypes.public,
  },
  {
    path: '/dashboard',
    compoennt: Dashboard,
    exact: true,
    type: routeTypes.private,
    roles: [ROLES.ADMIN],
  },
  {
    path: '/settings',
    compoennt: Settings,
    exact: true,
    type: routeTypes.private,
    roles: [ROLES.ADMIN],
  },
  {
    path: '/organization',
    compoennt: Organization,
    exact: true,
    type: routeTypes.private,
    roles: [ROLES.USER],
  },
];

export default routesList;
