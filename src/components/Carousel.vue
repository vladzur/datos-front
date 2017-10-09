<template>
  <div>
    <agile :arrows="false" :speed="750" :infinite="true" :autoplay="true" :autoplaySpeed="6000":pauseOnHover="false">
      <span v-for="banner in banners" :key="banner.id">
        <div class="slide" :style="{backgroundImage: banner.slide }">
          <h1>{{ banner.text }}</h1>
        </div>
      </span>

    </agile>
  </div>
</template>
<script>
export default {
  data () {
    return {
      banners: [
        { text: 'Si quieres comprar...', slide: `url('/static/img/landscape1.jpg')` },
        { text: 'Buscas arriendo...', slide: `url('/static/img/landscape2.jpg` },
        { text: 'Quieres vender algo...', slide: `url('/static/img/landscape3.jpg')` },
        { text: '...Este es el lugar', slide: `url('/static/img/landscape4.jpg')` }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.slide {
  color: #fff;
  height: 300px;
  position: relative;

  h1 {
    font-size: 3em;
    font-weight: 300;
    left: 50%;
    margin: 0;
    position: absolute;
    top: 40%;
    transform: translate(-50%, -50%);
  }

  h3 {
    font-size: 2em;
    font-weight: 300;
    left: 50%;
    margin: 0;
    position: absolute;
    top: 60%;
    transform: translate(-50%, -50%);
  }

  background: {
    position: center;
    size: cover;
  }

  &:before {
    background-color: rgba(#000, .4);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
