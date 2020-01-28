<template>
  <v-card class="mx-auto" height="100%">
    <v-card-title>
      <div>Najnovije obavijesti</div>
      <v-btn class="ma-2" small outlined color="indigo" to="/post/new"
        >Dodaj obavijest</v-btn
      >
    </v-card-title>
    <div v-for="(post, i) in posts" :key="post.id">
      <v-card-text>
        <nuxt-link :to="'/post/' + post.title">{{ post.title }}</nuxt-link>
      </v-card-text>
    </div>
    <div id="pagination-footer">
      <v-card-actions>
        <jw-pagination
          :items="posts"
          @changePage="onChangePage"
          :labels="pageLabel"
        ></jw-pagination>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
import axios from 'axios'
import { error } from 'util'
import firebase from 'firebase'
import { db } from '@/plugins/firebase'
import JwPagination from '@/plugins/pagination'

const pageLabel = {
  first: 'Nazad na prvu',
  last: 'Posljednja',
  previous: 'Prethodna',
  next: 'Sljedeća'
}

export default {
  data() {
    return {
      id: this.$route.params.id,
      posts: [],
      pagePosts: [],
      pageLabel
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
  },
  methods: {
    onChangePage(pagePosts) {
      this.pagePosts = pagePosts
    }
  }
}
</script>

<style>
#pagination-footer {
  position: absolute;
  bottom: 0;
}
</style>
