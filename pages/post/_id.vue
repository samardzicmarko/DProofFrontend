<template>
  <v-card class="mx-auto">
    <v-card-title>
      <v-row align="left" style="padding:10px;">
        <v-chip draggable>Nova obavijest</v-chip>
      </v-row>
      <div id="post-title">
        <h3>{{ posts.title }}</h3>
      </div>
    </v-card-title>
    <v-card-text>
      <div id="post-content">
        <p>{{ posts.content }}</p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios'
import { error } from 'util'
import firebase from 'firebase'
import { db } from '@/plugins/firebase'

export default {
  data() {
    return {
      id: this.$route.params.id,
      posts: {}
    }
  },
  created() {
    this.getPost()
  },
  watch: {
    $route: 'getPost'
  },

  methods: {
    getPost() {
      let query = db
        .collection('post')
        .where('title', '==', this.$route.params.id)
      query
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.posts = {
              title: doc.data().title,
              content: doc.data().content
            }
          })
        })
        .catch(function(error) {
          console.log('Erorr', error)
        })
    }
  }
}
</script>

<style>
#post-title {
  text-align: left;
}
#post-content {
}
</style>
