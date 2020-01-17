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
        <v-btn depressed color="primary" type="submit" @click="submitPost"
          >Objavi</v-btn
        >
      </v-form>
      <succes :message="message" v-if="showMessage"></succes>
    </v-col>
  </v-card>
</template>

<script>
import axios from 'axios'
import { error } from 'util'
import Succes from '@/components/Success.vue'

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
    getPosts() {
      const path = 'http://localhost:8000/posts/'
      axios
        .get(path)
        .then(({ data }) => {
          this.posts = data.data
        })
        .catch(error => {
          console.error(error)
        })
    },
    addPost(post) {
      const path = 'http://localhost:8000/posts/'
      axios
        .post(path, post)
        .then(() => {
          this.getPosts()
          this.message = 'Obavijest je uspješno objavljena!'
          this.showMessage = true
          this.Show = false
        })
        .catch(error => {
          console.log(error)
          this.getPosts()
        })
    },
    initForm() {
      ;(this.postForm.title = ''), (this.postForm.content = '')
    },
    submitPost(evt) {
      evt.preventDefault()
      const post = {
        title: this.postForm.title,
        content: this.postForm.content
      }
      alert(JSON.stringify(post))

      this.addPost(post)
      this.initForm()
    },
    created() {
      this.getPosts()
    }
  }
}
</script>

<style></style>
