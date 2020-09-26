import Layout from '../layout/admin';
import Home from '../views/admin/home';
import User from '../views/admin/user';
import ArticleManager from '../views/admin/article/manager';
import ArticleEdit from '../views/admin/article/edit';

export default {
  path: '/admin',
  name: 'home',
  component: Layout,
  childRoutes: [
    { path: '', component: Home },
    { path: 'user', component: User },
    { path: 'article/add', component: ArticleEdit },
    { path: 'article/edit/:id', component: ArticleEdit },
    { path: 'article/manager', component: ArticleManager },
  ],
};
