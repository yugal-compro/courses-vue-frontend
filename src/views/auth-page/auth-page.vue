<template src="./auth-page.html">
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login'
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
        this.formIsValid = false;
      } else {
        this.$router.push({ name: 'HomePage' });
      }
    },
    switchAuthMode() {}
  }
};
</script>

<style lang="scss" scoped src="./auth-page.scss">
</style>
