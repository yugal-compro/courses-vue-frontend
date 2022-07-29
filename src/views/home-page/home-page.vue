<template src="./home-page.html">
</template>

<script>
import CourseForm from '../../components/course-form/course-form.vue';
import CourseTable from '../../components/course-table/course-table.vue';

export default {
  name: 'HomePage',
  components: {
    CourseForm,
    CourseTable
  },
  created() {
    this.$store.dispatch('courses/showCourses');
  }
};
</script>

<style lang="scss" scoped src="./home-page.scss">
</style>
