<template src="./course-table.html">
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('courses', [
      'courses'
    ])
  },
  methods: {
    showDetails(id) {
      this.$router.push({
        name: 'CoursePage',
        params: {
          subjectId: id
        }
      });
    }
  }
};
</script>

<style scoped lang="scss" src="./course-table.scss"></style>
