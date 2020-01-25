<template>
  <v-card class="mx-auto">
    <v-card-title>Nova obavijest</v-card-title>
    <v-col ref="form" cols="12" md="8">
      <v-form ref="newPostForm" v-if="Show">
        <v-text-field
          v-model="postForm.title"
          label="Naslov"
          required
        ></v-text-field>
        <v-textarea
          v-model="postForm.content"
          label="Sadržaj obavijesti"
        ></v-textarea>
        <v-btn depressed color="primary" @click="savePost">Objavi</v-btn>
      </v-form>
      <succes :message="message" v-if="showMessage"></succes>
    </v-col>
  </v-card>
</template>

<script>
import axios from 'axios'
import { error } from 'util'
import Succes from '@/components/Success.vue'
import firebase from 'firebase'
import { db } from '@/plugins/firebase'
export default {
  data() {
    return {
      posts: {},
      postForm: {
        title: '',
        content: ''
      },
      showMessage: false,
      message: '',
      Show: true
    }
  },
  components: {
    succes: Succes
  },
  methods: {
    savePost() {
      db.collection('post')
        .add({
          title: this.postForm.title,
          content: this.postForm.content
        })
        .then(docRef => {
          console.log('Post added: ', docRef.title)
          this.$router.push('/')
        })
        .catch('Error adding new post', error)
    }
  }
}
</script>

<style></style>
