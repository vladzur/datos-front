import * as firebase from 'firebase'

const state = {
  announcements: [],
  userList: []
}

const getters = {
  listAll (state) {
    return state.announcements
  },
  userList (state) {
    return state.userList
  }
}

const actions = {
  fetchAll ({commit, rootState}) {
    firebase.database().ref('announcements/').on('value', snapshot => {
      commit('setAnnouncements', snapshot.val())
    })
    firebase.database().ref('users/' + rootState.user.user.id + '/announcements').on('value', snapshot => {
      commit('setUserList', snapshot.val())
    })
  },
  newItem ({commit, dispatch}, payload) {
    let newData = firebase.database().ref('announcements/').push()
    newData.set(payload)
    let userPayload = {
      key: newData.key,
      userid: payload.user.id,
      title: payload.title,
      description: payload.description
    }
    dispatch('setUser', userPayload)
  },
  setUser ({commit}, payload) {
    let data = {
      title: payload.title,
      description: payload.description
    }
    firebase.database().ref('users/' + payload.userid + '/announcements/' + payload.key).set(data)
  }
}

const mutations = {
  setAnnouncements (state, payload) {
    state.announcements = payload
  },
  setUserList (state, payload) {
    state.userList = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
