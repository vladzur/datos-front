import * as firebase from 'firebase'

const state = {
  user: null
}

const mutations = {
  setUser (state, payload) {
    state.user = payload
  }
}

const actions = {
  signUserUp ({ commit }, payload) {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
      user => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit('setUser', newUser)
      }
      )
      .catch(
      error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      }
      )
  },
  signUserIn ({ commit }, payload) {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
      user => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit('setUser', newUser)
      }
      )
      .catch(
      error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      }
      )
  },
  signUserInGoogle ({ commit }) {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(
      user => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit('setUser', newUser)
      }
      )
      .catch(
      error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      }
      )
  },
  signUserInFacebook ({ commit }) {
    commit('setLoading', true)
    commit('clearError')
    let provider = new firebase.auth.FacebookAuthProvider()
    provider.addScope('public_profile,email')
    firebase.auth().signInWithPopup(provider)
      .then(
      user => {
        console.log(user)
        commit('setLoading', false)
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit('setUser', newUser)
      }
      )
      .catch(
      error => {
        console.log(error)
        commit('setLoading', false)
        commit('setError', error)
      }
      )
  },
  signUserInGithub ({ commit }) {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then(
      user => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit('setUser', newUser)
      }
      )
      .catch(
      error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      }
      )
  },
  signUserInTwitter ({ commit }) {
    commit('setLoading', true)
    commit('clearError')
    firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then(
      user => {
        commit('setLoading', false)
        const newUser = {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }
        commit('setUser', newUser)
      }
      )
      .catch(
      error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      }
      )
  },
  autoSignIn ({ commit }, payload) {
    commit('setUser', {
      id: payload.uid,
      name: payload.displayName,
      email: payload.email,
      photoUrl: payload.photoURL
    })
  },
  logout ({ commit }) {
    firebase.auth().signOut()
    commit('setUser', null)
  }
}

const getters = {
  user (state) {
    return state.user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
