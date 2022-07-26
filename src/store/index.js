import { createStore } from 'vuex';
import courses from './modules/courses';

export default createStore({
  modules: {
    courses
  }
});
