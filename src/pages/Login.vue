<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <div class="box">
            <h1 class="title">Iniciar Sesión</h1>
            <div class="field">
              <div class="control has-icons-left">
                <input class="input" type="email" placeholder="john@server.com" v-model="user.email">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control has-icons-left">
                <input class="input" type="password" v-model="user.password">
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="control">
              <a class="button is-primary" @click="login">Ingresar</a> o iniciar sesión con <a class="button is-outline" @click="signInGoogle">
                <span class="icon is-left">
                  <i class="icon fa fa-google"></i>
                </span>
                oogle
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <p>No soy usuario, quiero <router-link to="/register">registrarme</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login () {
        this.$store.dispatch('signUserIn', this.user)
      },
      signInGoogle () {
        this.$store.dispatch('signUserInGoogle')
      }
    }
  }
</script>
