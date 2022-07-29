import axios from 'axios';

const courses = {
  namespaced: true,
  state() {
    return {
      courses: [],
      courseId: null
    };
  },
  getters: {
    courses(state) {
      return state.courses;
    },
    courseId(state) {
      return state.courseId;
    }
  },
  mutations: {
    updateCourses(state, allCourses) {
      state.courses = allCourses;
    },
    updateCourseById(state, course) {
      state.courseId = course;
    }
  },
  actions: {
    async showCourses({ commit }) {
      try {
        const response = await axios.get('http://localhost:7000/api/courses');
        const result = response.data;
        commit('updateCourses', result);
      } catch (error) {
        console.log(error);
      }
    },
    async addCourse({ commit }, payload) {
      const newCourse = {
        subjectName: payload.subject,
        courseName: payload.course
      };
      try {
        const response = await axios.post('http://localhost:7000/api/courses', newCourse);
        const result = response.data;
        commit('updateCourses', result);
      } catch (error) {
        console.log(error);
      }
    },
    async getCourse({ commit }, courseId) {
      try {
        const response = await axios.get(`http://localhost:7000/api/courses/${courseId}`);
        const result = response.data;
        commit('updateCourseById', result);
      } catch (error) {
        console.log(error);
      }
    },
    async updateCourse({ commit }, payload) {
      const data = {
        subjectName: payload.subject,
        courseName: payload.course
      };
      try {
        const response = await axios.put(`http://localhost:7000/api/courses/${payload.id}`, data);
        const result = response.data;
        console.log(result);
        commit('updateCourseById', result);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteCourse(_, payload) {
      try {
        await axios.delete(`http://localhost:7000/api/courses/${payload}`);
      } catch (error) {
        console.log(error);
      }
    }
  }
};

export default courses;
