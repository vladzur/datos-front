<template>
  <div>
    <carousel/>
    <div class="section">
      <div class="container">
        <div class="box">
          <span class="tag is-dark">beta</span>
          <main-title>Bienvenido a Datos Villarrica</main-title>
          <p>Este sitio está en desarrollo, el contenido que usted publique podría ser eliminado</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel'
export default {
  name: 'home',
  components: { Carousel }
}
</script>

<style>

</style>
