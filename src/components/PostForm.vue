<template>
  <div class="box">
    <img :src="dataUrl">
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Título" v-model="post.title">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Precio" v-model="post.price">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <textarea class="textarea" v-model="post.description" placeholder="Descripción"></textarea>
      </div>
    </div>
    <div class="control">
      <a class="button is-primary" @click="setItem">Publicar</a>
    </div>

    <dropzone id="myVueDropzone" url="/" :autoProcessQueue="false" @vdropzone-file-added="fileData"/>

  </div>
</template>

<script>
import Post from '../models/post'
import Dropzone from 'vue2-dropzone'
export default {
  components: { Dropzone },
  props: {
    post: {
      default () { return new Post() }
    }
  },
  data () {
    return {
      dataUrl: 'xxx'
    }
  },
  methods: {
    setItem () {
      this.$emit('save', this.post)
    },
    fileData (file) {
      console.log(file)
      this.dataUrl = file.dataURL
    }
  }
}
</script>
