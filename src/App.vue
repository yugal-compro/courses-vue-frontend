<template>
  <course-header/>
  <router-view/>
  <course-footer/>
</template>

<script>
import CourseHeader from './components/course-header/course-header.vue';
import CourseFooter from './components/course-footer/course-footer.vue';

export default {
  name: 'App',
  components: {
    CourseHeader,
    CourseFooter
  }
};
</script>

<style lang="scss" src="./assets/styles/index.scss">
</style>
