<template>
  <div class="container">
    <div class="box">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="Text input">
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="Text input">
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary" @click="signInUser">Iniciar Sesión</button>
        </div>
        <div class="control">
          <button class="button is-link" @click="signInGoogle">Iniciar con Google</button>
        </div>
        <div class="control">
          <button class="button is-link" @click="signInFacebook">Iniciar con Facebook</button>
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

