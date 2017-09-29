import * as firebase from 'firebase'

const state = {
  posts: [],
  userPosts: []
}

const getters = {
  allPosts (state) {
    return state.posts
  },

  userPosts (state) {
    return state.userPosts
  }
}

const actions = {
  fetchPosts ({commit, rootState}) {
    commit('setLoading', true)
    firebase.database().ref('posts/').on('value', snapshot => {
      commit('setPosts', snapshot.val())
      commit('setLoading', false)
    })
  },

  newItem ({commit, rootState}, payload) {
    let newPostRef = firebase.database().ref('posts/').push()
    let newPostKey = newPostRef.key
    let updateData = {}
    updateData['users/' + rootState.user.user.id + '/posts/' + newPostKey] = payload
    updateData['posts/' + newPostKey] = payload
    firebase.database().ref().update(updateData)
  },

  updatePost ({commit, rootState}, payload) {
    let key = payload.key
    let post = payload.post
    let updateData = {}
    updateData['users/' + rootState.user.user.id + '/posts/' + key] = post
    updateData['posts/' + key] = post
    firebase.database().ref().update(updateData)
  },

  fetchUserPosts ({commit, rootState}) {
    firebase.database().ref('users/' + rootState.user.user.id + '/posts/').on('value', snapshot => {
      commit('setUserPosts', snapshot.val())
    })
  }
}

const mutations = {
  setPosts (state, payload) {
    state.posts = payload
  },

  setUserPosts (state, payload) {
    state.userPosts = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
