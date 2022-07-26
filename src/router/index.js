import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/home-page/home-page.vue';
import CourseId from '../components/course-id/course-id.vue';

const routes = [
  {
    path: '/',
    redirect: '/home-page'
  },
  {
    path: '/home-page',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/home-page/course/:subjectId',
    name: 'CourseId',
    component: CourseId
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
