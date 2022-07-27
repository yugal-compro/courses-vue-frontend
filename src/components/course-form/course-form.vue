<template src="./course-form.html">
</template>

<script>
export default {
  name: 'CourseForm',
  data() {
    return {
      enteredSubject: '',
      enteredCourse: ''
    };
  },
  methods: {
    submitData() {
      const obj = {
        subject: this.enteredSubject,
        course: this.enteredCourse
      };
      this.$store.dispatch('courses/addCourse', obj);
      this.enteredSubject = '';
      this.enteredCourse = '';
      document.querySelector('.courses-container').scrollIntoView();
    }
  }
};
</script>

<style scoped lang="scss" src="./course-form.scss"></style>
