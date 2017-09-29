<template>
  <div>
    <loading v-if="isLoading"/>
    <top-menu/>
    <carousel/>
    <div class="section">
      <router-view></router-view>
      <vue-progress-bar></vue-progress-bar>
    </div>
  </div>
</template>

<script>
import Carousel from './components/Carousel'
import TopMenu from './components/TopMenu'
import Loading from './components/Loading'
export default {
  name: 'app',
  components: { Carousel, TopMenu, Loading },
  created () {
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  },
  mounted () {
    this.$Progress.finish()
  },
  computed: {
    isLoading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style lang="scss">
@import "./assets/sass/app.scss";
</style>
