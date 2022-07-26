<template src="./course-id.html">
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      id: this.$route.params.subjectId,
      update: false,
      newSubject: '',
      newCourse: ''
    };
  },
  computed: {
    ...mapGetters('courses', {
      course: 'courseById'
    })
  },
  methods: {
    getCourse() {
      this.$store.dispatch('courses/getCourseById', this.id);
    },
    toggleUpdate() {
      this.update = !this.update;
    },
    updateCourse() {
      const courseDetails = {
        id: this.id,
        subject: this.newSubject,
        course: this.newCourse
      };
      this.$store.dispatch('courses/updateCourse', courseDetails);
      this.$router.go();
      this.toggleUpdate();
    },
    deleteCourse() {
      this.$store.dispatch('courses/deleteCourse', this.id);
      this.$router.replace('/home-page');
    }
  },
  created() {
    this.getCourse();
  }
};
</script>

<style lang="scss" scoped src="./course-id.scss">
</style>
