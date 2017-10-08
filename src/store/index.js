import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import loading from './modules/loading'
import messages from './modules/messages'
import posts from './modules/posts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    loading,
    messages,
    posts
  }
})
