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
          <input class="input" type="text" placeholder="Title" v-model="post.title">
        </div>
      </div>
      <div class="field">
        <label class="label">Price</label>
        <div class="control">
          <input class="input" type="text" placeholder="Description" v-model="post.price">
        </div>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea class="textarea" v-model="post.description"></textarea>
        </div>
      </div>
      <div class="control">
        <a class="button is-primary" @click="setItem">Save</a>
      </div>
    </div>
    <div class="box" v-for="(item, key) in userPosts" :key="key">
      <div class="content">
        <h3>{{item.title}}</h3>
        <p>{{item.description}}</p>
        {{key}}
      </div>
    </div>
  </div>
</template>

<script>
import Post from '../models/post'
export default {
  data () {
    return {
      post: new Post()
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    userPosts () {
      return this.$store.getters.userPosts
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
      this.post.user = this.user
      this.$store.dispatch('newItem', this.post)
      this.post = new Post()
    }
  },
  created () {
    this.$store.dispatch('fetchUserPosts')
  }
}
</script>

