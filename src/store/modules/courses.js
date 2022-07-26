const courses = {
  namespaced: true,
  state() {
    return {
      courses: [],
      courseById: null
    };
  },
  getters: {
    error(state) {
      return state.error;
    },
    isLoading(state) {
      return state.isLoading;
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
    }
  },
  actions: {
    async showCourses(context) {
      const response = await fetch('http://localhost:7000/api/courses');
      const result = await response.json();
      context.commit('updateCourses', result);
    },
    async addCourse(context, payload) {
      const response = await fetch('http://localhost:7000/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          subjectName: payload.subject,
          courseName: payload.course
        })
      });
      const result = await response.json();
      context.commit('updateCourses', result);
    },
    async getCourseById(context, payload) {
      const response = await fetch(`http://localhost:7000/api/courses/${payload}`);
      const result = await response.json();
      context.commit('getCourseById', result);
    },
    async updateCourse(context, payload) {
      const data = {
        subjectName: payload.subject,
        courseName: payload.course
      };

      await fetch(`http://localhost:7000/api/courses/${payload.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    },
    async deleteCourse(context, payload) {
      await fetch(`http://localhost:7000/api/courses/${payload}`, { method: 'DELETE' });
    }
  }
};

export default courses;
