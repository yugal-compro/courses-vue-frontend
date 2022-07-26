<template src="./course-table.html">
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('courses', [
      'error',
      'isLoading',
      'courses'
    ])
  },
  methods: {
    loadCourses() {
      this.$store.dispatch('courses/showCourses');
    },
    showDetails(id) {
      this.$router.push(`home-page/course/${id}`);
    }
  },
  created() {
    this.loadCourses();
  }
};
</script>

<style scoped lang="scss" src="./course-table.scss"></style>
