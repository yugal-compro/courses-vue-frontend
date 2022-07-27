<template src="./course-page.html">
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CoursePage',
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
    updateCourse(sub, cour) {
      const courseDetails = {
        id: this.id,
        subject: sub,
        course: cour
      };
      this.$store.dispatch('courses/updateCourse', courseDetails);
      this.toggleUpdate();
      this.$toast('Course Updated!!!');
      this.$router.push();
    },
    deleteCourse() {
      this.$store.dispatch('courses/deleteCourse', this.id);
      this.$toast('Course Deleted!!!');
      this.$router.push({ name: 'HomePage' });
    }
  },
  created() {
    this.getCourse();
  }
};
</script>

<style lang="scss" scoped src="./course-page.scss">
</style>
