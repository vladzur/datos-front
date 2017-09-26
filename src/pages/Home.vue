<template>
  <div>
    <main-title>Bienvenido a Datos Villarrica</main-title>
    <div v-if="!userIsAuthenticated"class="box">
      <a class="button is-primary" @click="signInGoogle">Entrar con Google</a>
      <a class="button is-primary" @click="signInFacebook">Entrar con Facebook</a>
    </div>
    <div v-else class="box">
      <img :src="userInfo.photoUrl">
      <h1>{{userInfo.name}}</h1>
      <h3>{{userInfo.email}}</h3>
      <a class="button is-danger" @click="Logout">Logout</a>
    </div>
  </div>
</template>

<script>
import MainTitle from '../components/MainTitle'
export default {
  name: 'home',
  components: { MainTitle },
  computed: {
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    userInfo () {
      console.log(this.$store.getters.user)
      return this.$store.getters.user
    }
  },
  methods: {
    signInGoogle () {
      this.$store.dispatch('signUserInGoogle')
    },
    signInFacebook () {
      this.$store.dispatch('signUserInFacebook')
    },
    Logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

</style>
