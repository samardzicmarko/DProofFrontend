<template>
  <div>
    <h1>Podaci za prijavu kuće za odmor</h1>

    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="obrazac.ime"
        :rules="nameRules"
        label="Ime i Prezime / Naziv pravne osobe"
        required
      ></v-text-field>
      <v-text-field
        v-model="obrazac.prebivaliste"
        :rules="nameRules"
        label="Prebivalište"
        required
      ></v-text-field>
      <v-text-field
        v-model="obrazac.oib"
        :rules="[oibID]"
        label="OIB"
        required
      ></v-text-field>

      <v-text-field
        v-model="obrazac.email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <p>
        Prijavljujem kuću za odmor (zgrada/dio zgrade/stan) koju koristim
        povremeno ili sezonski, na adresi:
      </p>
      <v-text-field
        v-model="obrazac.adresa"
        :rules="nameRules"
        label="Adresa, ulica i kučni broj"
        required
      ></v-text-field>
      <p>Kuća (zgrada/dio zgrade/stan) za odmor ima korisnu površinu od</p>
      <v-text-field
        v-model="obrazac.kvadratura"
        :rules="nameRules"
        label="u m2"
        required
      ></v-text-field>

      <p>Vlasnik sam kuće za odmor od:</p>
      <v-text-field
        v-model="obrazac.datum"
        :rules="nameRules"
        label="datum"
        required
      ></v-text-field>

      <p>Podaci se daju u svrhu razreza poreza na kuće za odmor za</p>
      <v-text-field
        v-model="obrazac.godina"
        :rules="nameRules"
        label="godinu"
        required
      ></v-text-field>
      <p>Rješenje o porezu na kuću za odmor dostavljat će se:</p>
      <v-radio-group v-model="obrazac.rijesenje">
        <v-radio
          label="poštom na adresu prebivališta/sjedišta vlasnika"
        ></v-radio>
        <v-radio label="poštom na adresu na kojoj je kuća za odmor:"></v-radio>
        <v-radio
          label="na adresu opunomoćenika u RH ukoliko želite da se rješenje dostavlja opunomoćeniku"
        ></v-radio>
      </v-radio-group>
      <v-checkbox
        v-model="obrazac.odredbe"
        label="Upoznat sam sa odredbama Zakona o elektroničkoj ispravi (NN br. 150/05), te izričito izjavljujem da sam suglasan da mi Grad Pula-Pola sva pismena-obavijesti povodom ovog zahtjeva dostavlja elektroničkim putem na e-mail adresu"
      ></v-checkbox>

      <v-btn @click="spremiObrazac(), createContract()">Submit</v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios'
import { error } from 'util'
import firebase from 'firebase'
import { db } from '@/plugins/firebase'
import process_contract from '@/contracts/process_contract'
import obrazac from '@/contracts/obrazac_instance'

const oib = require('oib.js')

export default {
  rules: {
    oibID: value => {
      return oib.validate(value) || 'Neispravan OIB'
    }
  },

  data() {
    return {
      obrazac: {
        ime: '',
        prebivaliste: '',
        oib: 0,
        email: '',
        adresa: '',
        kvadratura: 0,
        datum: '',
        godina: '',
        rijesenje: '',
        odredbe: false
      }
    }
  },
  methods: {
    fillData() {
      console.log(this.obrazac)
    },
    spremiObrazac() {
      db.collection('obrazac-kuca-za-odmor')
        .add({
          ime: this.obrazac.ime,
          prebivaliste: this.obrazac.prebivaliste,
          oib: this.obrazac.oib,
          email: this.obrazac.email,
          adresa: this.obrazac.adresa,
          kvadratura: this.obrazac.kvadratura,
          datum: this.obrazac.datum,
          godina: this.obrazac.godina,
          rijesenje: this.obrazac.rijesenje,
          odredbe: this.obrazac.odredbe
        })
        .then(docRef => {
          this.showMessage = true
          this.$router.push('/post')
        })
        .catch('Error adding new obrazac-kuca-za-odmor', error)
    },
    createContract() {
      web3.eth.getAccounts().then(accounts => {
        console.log('proslo')
        return dproof.methods.Obrazac()
      })
    }
  }
}
</script>

<style></style>
