<template>
  <div class="box">
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
    <div class="dropbox">
      <input
      type="file"
      multiple
      :name="uploadFieldName"
      :disabled="isSaving"
      @change="filesChange($event)"
      accept="image/*"
      class="input-file"
      >
      <p v-if="isInitial">
        Arrastre aquí sus fotos<br> o pinche para seleccionar <br>(650KB x foto máx)
      </p>
      <p v-if="isSaving">
        Cargando {{ fileCount }} imágenes...
      </p>
    </div>
    <figure v-for="(thumb, key) in fileThumbs" :key="key">
      <img :src="thumb" class="thumb" @click="preview(thumb)">
    </figure>
    <div class="control">
      <a class="button is-primary" @click="setItem">Publicar</a>
    </div>
    <modal-image :url="currentThumb" v-if="currentThumb" @close="currentThumb = null"/>
  </div>
</template>

<script>
import Post from '../models/post'
import ModalImage from './ModalImage'

const STATUS_INITIAL = 0
const STATUS_SAVING = 1
const STATUS_SUCCESS = 2
const STATUS_FAILED = 3

export default {
  components: {
    ModalImage
  },
  props: {
    post: {
      default () { return new Post() }
    }
  },
  data () {
    return {
      uploadedFiles: [],
      uploadError: null,
      currentStatus: STATUS_INITIAL,
      uploadFieldName: 'photos',
      fileCount: 0,
      fileThumbs: [],
      currentThumb: null
    }
  },
  computed: {
    isInitial () {
      return this.currentStatus === STATUS_INITIAL
    },
    isSaving () {
      return this.currentStatus === STATUS_SAVING
    },
    isSuccess () {
      return this.currentStatus === STATUS_SUCCESS
    },
    isFailed () {
      return this.currentStatus === STATUS_FAILED
    }
  },
  methods: {
    preview (thumb) {
      this.currentThumb = thumb
    },
    setItem () {
      this.$emit('save', this.post)
    },
    reset () {
      this.currentStatus = STATUS_INITIAL
      this.uploadedFiles = []
      this.uploadError = null
    },
    save (formData) {
      this.currentStatus = STATUS_SAVING
    },
    filesChange (evt) {
      this.currentStatus = STATUS_SAVING
      let fileList = evt.target.files
      this.fileCount = fileList.length
      if (!fileList.length) {
        this.currentStatus = STATUS_INITIAL
        return
      }
      for (let id in fileList) {
        let file = fileList[id]
        if (file.size > 665600) {
          this.$store.dispatch('setError', 'No puede subir imagenes mayores a 650KB')
          this.currentStatus = STATUS_INITIAL
          return
        }
        let reader = new FileReader()
        reader.onload = e => {
          this.fileThumbs.push(e.target.result)
          this.currentStatus = STATUS_INITIAL
        }
        reader.readAsDataURL(file)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dropbox {
  outline: 2px dashed grey;
  /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px;
  /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0;
  /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue;
  /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}

.thumb {
    height: 175px;
    border: 1px solid #888;
    border-radius: 8px;
  }
</style>
