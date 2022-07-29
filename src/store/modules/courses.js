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
    getCourse(state, course) {
      state.courseId = course;
    }
  },
  actions: {
    async showCourses(context) {
      try {
        const response = await axios.get('http://localhost:7000/api/courses');
        const result = response.data;
        context.commit('updateCourses', result);
      } catch (error) {
        console.log(error);
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
        console.log(error);
      }
    },
    async getCourse(context, payload) {
      try {
        const response = await axios.get(`http://localhost:7000/api/courses/${payload}`);
        const result = response.data;
        context.commit('getCourse', result);
      } catch (error) {
        console.log(error);
      }
    },
    async updateCourse(context, payload) {
      const data = {
        subjectName: payload.subject,
        courseName: payload.course
      };
      try {
        const response = await axios.put(`http://localhost:7000/api/courses/${payload.id}`, data);
        const result = response.data;
        console.log(result);
        context.commit('getCourse', result);
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
