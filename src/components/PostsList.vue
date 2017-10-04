<template>
  <div class="section">
    <div class="columns" v-for="(item, key) in posts" :key="key">
      <div class="column is-10 is-offset-1">
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
  props: ['posts']
}
</script>
