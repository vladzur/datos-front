<template>
  <div class="section">
    <div class="columns" v-for="(item, key) in posts" :key="key">
      <div class="column is-10 is-offset-1">
        <div class="card">
          <div class="card-content">
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
