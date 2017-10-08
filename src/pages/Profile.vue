<template>
  <div class="container">
    <div class="columns">
      <div class="column is-4">
        <user :user="user" />
      </div>
      <div class="column is-8">
        <post-form @save="setItem"/>
      </div>
    </div>
    <user-posts :posts="userPosts" />
  </div>
</template>

<script>
import PostForm from '../components/PostForm'
import User from '../components/User'
import UserPosts from '../components/UserPosts'
export default {
  components: {
    PostForm,
    User,
    UserPosts
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
    setItem (post) {
      post.user = this.user
      this.$store.dispatch('newItem', post)
    }
  },
  created () {
    this.$store.dispatch('fetchUserPosts')
  }
}
</script>

