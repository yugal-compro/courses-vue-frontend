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
      course: 'courseId'
    })
  },
  methods: {
    toggleUpdate() {
      this.update = !this.update;
      this.newSubject = this.course.subjectName;
      this.newCourse = this.course.courseName;
      console.log(this.course);
    },
    updateCourse() {
      const courseDetails = {
        id: this.id,
        subject: this.newSubject,
        course: this.newCourse
      };
      this.$store.dispatch('courses/updateCourse', courseDetails);
      this.update = !this.update;
      this.$toast('Course Updated!!!');
    },
    deleteCourse() {
      this.$store.dispatch('courses/deleteCourse', this.id);
      this.$toast('Course Deleted!!!');
      this.$router.push({ name: 'HomePage' });
    }
  },
  created() {
    this.$store.dispatch('courses/getCourse', this.id);
  }
};
</script>

<style lang="scss" scoped src="./course-page.scss">
</style>
