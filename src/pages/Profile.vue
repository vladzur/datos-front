<template>
  <div class="container">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="user.photoUrl">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{user.name}}</p>
            <p class="subtitle is-6">{{user.email}}</p>
          </div>
        </div>
        <div class="content">
          <a class="button" @click="signOut">Cerrar Sesión</a>
        </div>
      </div>
    </div>
    <hr>
    <div class="box">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="Title" v-model="item.title">
        </div>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <input class="input" type="text" placeholder="Description" v-model="item.description">
        </div>
      </div>
      <div class="control">
        <a class="button is-primary" @click="setItem">Save</a>
      </div>
    </div>
    <div class="box" v-for="anuncio in userList" :key="anuncio.key">
      <div class="content">
        <h3>{{anuncio.title}}</h3>
        <p>{{anuncio.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      item: {
        user: '',
        title: '',
        description: ''
      }
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    userList () {
      return this.$store.getters.userList
    }
  },
  watch: {
    user (value) {
      if (!value) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    signOut () {
      this.$store.dispatch('logout')
    },
    setItem () {
      this.item.user = this.user
      this.$store.dispatch('newItem', this.item)
      this.item = {
        title: '',
        description: ''
      }
    }
  }
}
</script>

