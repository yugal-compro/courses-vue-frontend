import axios from 'axios';

const courses = {
  namespaced: true,
  state() {
    return {
      courses: [],
      courseById: null,
      error: null
    };
  },
  getters: {
    error(state) {
      return state.error;
    },
    courses(state) {
      return state.courses;
    },
    courseById(state) {
      return state.courseById;
    }
  },
  mutations: {
    updateCourses(state, payload) {
      state.courses = payload;
    },
    getCourseById(state, payload) {
      state.courseById = payload;
    },
    errorMessage(state, payload) {
      state.error = payload;
    }
  },
  actions: {
    async showCourses(context) {
      try {
        const response = await axios.get('http://localhost:7000/api/courses');
        const result = response.data;
        context.commit('updateCourses', result);
      } catch (error) {
        context.commit('errorMessage', 'Unable to get courses right now try after some time');
      }
    },
    async addCourse(context, payload) {
      const newCourse = {
        subjectName: payload.subject,
        courseName: payload.course
      };
      try {
        const response = await axios.post('http://localhost:7000/api/courses', newCourse);
        const result = response.data;
        context.commit('updateCourses', result);
      } catch (error) {
        context.commit('errorMessage', 'Unable to add course at the moment');
      }
    },
    async getCourseById(context, payload) {
      try {
        const response = await axios.get(`http://localhost:7000/api/courses/${payload}`);
        const result = response.data;
        context.commit('getCourseById', result);
      } catch (error) {
        context.commit('errorMessage', 'Unable to get the course at the moment please try again later.');
      }
    },
    async updateCourse(context, payload) {
      const data = {
        subjectName: payload.subject,
        courseName: payload.course
      };
      try {
        await axios.put(`http://localhost:7000/api/courses/${payload.id}`, data);
      } catch (error) {
        context.commit('errorMessage', 'Unable to update the course');
      }
    },
    async deleteCourse(context, payload) {
      try {
        await axios.delete(`http://localhost:7000/api/courses/${payload}`);
      } catch (error) {
        context.commit('errorMessage', 'Unable to delete the course');
      }
    }
  }
};

export default courses;
