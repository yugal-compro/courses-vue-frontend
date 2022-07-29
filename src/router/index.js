import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/home-page/home-page.vue';
import CoursePage from '../views/course-page/course-page.vue';

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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
