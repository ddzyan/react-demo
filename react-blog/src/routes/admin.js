import Layout from '../layout/admin';
import Home from '../views/admin/home';

export default {
  path: '/admin',
  name: 'home',
  component: Layout,
  childRoutes: [{ path: '', component: Home }],
};
