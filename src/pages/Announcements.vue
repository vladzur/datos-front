<template>
  <div class="container">
    <h1 class="title">Anuncios</h1>
    <posts-list :posts="posts"/>
  </div>
</template>

<script>
import PostsList from '../components/PostsList'
export default {
  components: { PostsList },
  created () {
    this.$store.dispatch('fetchPosts')
  },
  computed: {
    posts () {
      return this.$store.getters.allPosts
    }
  }
}
</script>

