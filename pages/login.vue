<!-- Za kasnije, password reset sustav, ako je potrebno ici toliko u detalje -->

<template>
  <v-card class="mx-auto" max-width="500">
    <v-card-title class="justify-center">
      <div>Prijava</div>
    </v-card-title>

    <v-form ref="loginForm" v-model="valid">
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8" lg="8">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            @keyup.enter="submitLogin"
            required
          ></v-text-field>
          <v-text-field
            v-model="lozinka"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="lozinkaRules"
            :type="show1 ? 'text' : 'password'"
            label="Lozinka"
            counter
            @keyup.enter="submitLogin"
            required
            @click:append="show1 = !show1"
          ></v-text-field>
          <div class="text-center">
            <v-btn class="ma-2" outlined color="indigo" dark large @click="submitLogin">Prijavi se</v-btn>
          </div>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="12" sm="10" md="8" lg="8">
          <div id="additional-info">
            Nemaš korisnički račun?
            <v-btn text small color="primary">Registriraj se</v-btn>
          </div>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <img id="google" @click="googleLogin" src="~/assets/social.png" aspect-ratio="1.7" />
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>


<script>
import axios from 'axios'
import { error } from 'util'
import firebase from 'firebase'
import { db } from '@/plugins/firebase'

export default {
  data: () => ({
    valid: true,
    email: '',
    emailRules: [v => /.+@.+\..+/.test(v) || 'E-mail mora biti validan!'],
    lozinka: '',
    show1: false,
    show2: true,
    lozinkaRules: [
      v => !!v || 'Obavezno polje!',
      v => v.length >= 8 || 'Najmanje 8 znakova'
    ]
  }),

  methods: {
    submitLogin(evt) {
      evt.preventDefault()
      console.log('TEST')
      const userInfo = {
        email: this.email
      }
      alert(JSON.stringify(userInfo))
    },
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          this.$router.replace('home')
        })
        .catch(error => {
          alert('Oops' + err.message)
        })
    }
  }
}
</script>

<style>
#google {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>