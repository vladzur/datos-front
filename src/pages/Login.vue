<template>
  <div class="container">
    <div class="box">
        <div class="control has-icon-left">
          <button class="button is-info" @click="signInFacebook">
            <span class="icon is-small is-left">
              <i class="fa fa-facebook-official"></i>
            </span>
            <span>
              Iniciar con Facebook
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/profile')
      }
    }
  },
  methods: {
    signInGoogle () {
      this.$store.dispatch('signUserInGoogle')
    },
    signInFacebook () {
      this.$store.dispatch('signUserInFacebook')
    },
    signInUser () {
      this.$store.dispatch('signUserIn')
    }
  }
}
</script>

