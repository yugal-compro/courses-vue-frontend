import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/home-page/home-page.vue';
import CoursePage from '../views/course-page/course-page.vue';
import AuthPage from '../views/auth-page/auth-page.vue';

const routes = [
  {
    path: '/',
    redirect: '/courses'
  },
  {
    path: '/courses',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/courses/:subjectId',
    name: 'CoursePage',
    component: CoursePage
  },
  {
    path: '/auth',
    name: 'AuthPage',
    component: AuthPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
