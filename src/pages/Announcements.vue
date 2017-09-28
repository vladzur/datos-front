<template>
  <div class="container">
    <h1 class="title">Anuncios</h1>
    <div class="columns" v-for="(item, key) in announcements" :key="key">
      <div class="column is-9 is-offset-2">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="item.user.photoUrl">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{item.user.name}}</p>
                <p class="subtitle is-6">{{item.user.email}}</p>
              </div>
            </div>
            <div class="content">
              <h3>{{item.title}}</h3>
              <h4>${{item.price}}</h4>
              <p>{{item.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    announcements () {
      return this.$store.getters.allPosts
    }
  },
  created () {
    this.$store.dispatch('fetchPosts')
  }
}
</script>

