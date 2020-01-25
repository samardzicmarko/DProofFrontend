<template>
  <v-card class="mx-auto">
    <v-card-title>
      <div>Najnovije obavijesti</div>
      <v-btn class="ma-2" small outlined color="indigo" to="/post/new">Dodaj obavijest</v-btn>
    </v-card-title>
    <div v-for="post in posts" :key="post.id">
      <v-card-text>
        <router-link :to="{name: 'detail',params: {postId: post.id}}">{{ post.title }}</router-link>
      </v-card-text>
    </div>
    <v-card-actions>
      <v-btn text small color="primary">Prikazi više</v-btn>
    </v-card-actions>
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
      posts: []
    }
  },
  // Dohvacanje tablice post u Firebaseu
  mounted() {
    db.collection('post')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let post = doc.data()
          post.id = doc.id
          this.posts.push(post) // push funkcija puni polje postova
        })
      })
  }
}
</script>

<style></style>
