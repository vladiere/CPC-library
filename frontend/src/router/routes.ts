import { RouteRecordRaw } from 'vue-router';
import { Platform } from 'quasar';

const routes: RouteRecordRaw[] = [];

if (Platform.is.electron) {
  routes.push(
    {
      path: '/',
      component: () => import('layouts/DesktopLayout.vue'),
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('pages/desktop/Login/LoginViewPage.vue'),
        },
        {
          path: '/home',
          component: () => import('layouts/desktop/Sidebar.vue'),
          children: [
            {
              path: '',
              name: 'home',
              component: () => import('pages/desktop/Home/HomeViewPage.vue'),
            },
          ],
        },
        {
          path: '/forgot-password',
          name: 'forgot-password',
          component: () =>
            import('pages/desktop/ForgotPass/ForgotPasswordView.vue'),
        },
      ],
    },
    // Other desktop routes
    {
      path: '/:catchAll(.*)*',
      component: () => import('pages/ErrorNotFound.vue'),
    }
  );
} else {
  routes.push(
    {
      path: '/',
      component: () => import('layouts/OutsideLayout.vue'),
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('pages/web/Login/LoginViewPage.vue'),
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('pages/web/Register/RegisterViewPage.vue'),
        },
      ],
    },
    {
      path: '/home',
      component: () => import('layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('pages/web/Home/HomeViewPage.vue'),
        },
      ],
    },

    // Other web routes
    {
      path: '/:catchAll(.*)*',
      component: () => import('pages/ErrorNotFound.vue'),
    }
  );
}

export default routes;
