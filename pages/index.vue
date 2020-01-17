<template>
  <v-card class="mx-auto">
    <v-card-title>
      <div>Najnovije obavijesti</div>
      <v-btn text small color="secondary" to="newPost">Dodaj obavijest</v-btn>
    </v-card-title>
    <div v-for="(post, i) in posts" :key="i">
      <v-card-text>{{post.title}}</v-card-text>
    </div>
    <v-card-actions>
      <v-btn text small color="primary">Prikazi više</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios'
import { error } from 'util'

export default {
  data() {
    return {
      posts: {}
    }
  },
  methods: {
    getPosts() {
      const path = 'http://localhost:8000/posts/'
      axios
        .get(path)
        .then(res => {
          this.posts = res.data
          console.log('posts', data.data)
        })
        .catch(error => {
          // eslint-disable-next-line
          console.error(error)
        })
    }
  },
  mounted() {
    this.getPosts()
  }
}
</script>

<style>
</style>