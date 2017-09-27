<template>
  <div class="container">
    <div class="box">
      <h1>Anuncios</h1>
    </div>
    <div class="card" v-for="announce in announcements" :key="announce.key">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="announce.user.photoUrl">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{announce.user.name}}</p>
            <p class="subtitle is-6">{{announce.user.email}}</p>
          </div>
        </div>
        <div class="content">
          <h3>{{announce.title}}</h3>
          <p>{{announce.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    announcements () {
      return this.$store.getters.listAll
    }
  },
  created () {
    this.$store.dispatch('fetchAll')
  }
}
</script>

