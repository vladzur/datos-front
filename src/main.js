// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as firebase from 'firebase'
import VueAgile from 'vue-agile'
import VueProgressBar from 'vue-progressbar'

Vue.use(VueAgile)

const options = {
  color: '#3385ff',
  failedColor: '#ff4d4d',
  height: '5px'
}

Vue.use(VueProgressBar, options)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    const config = {
      apiKey: 'AIzaSyD0DixYFV_SE-zHi5eUPYSTEF4jchnh5tg',
      authDomain: 'datos-villarrica.firebaseapp.com',
      databaseURL: 'https://datos-villarrica.firebaseio.com',
      projectId: 'datos-villarrica',
      storageBucket: 'datos-villarrica.appspot.com',
      messagingSenderId: '773734515702'
    }
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        if (user.emailVerified) {
          this.$store.dispatch('autoSignIn', user)
        }
      }
    })
  }
})
