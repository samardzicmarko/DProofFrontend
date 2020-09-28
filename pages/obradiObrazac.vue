<template>
  <div>
    <div class="row">
      <v-list-item>
        <v-list-item-content>
          <div class="col-8">
            <v-list-item-title>{{ contracts.ime }}</v-list-item-title>
            <v-list-item-subtitle>{{ contracts.adresa }}</v-list-item-subtitle>
          </div>
          <div class="col-4">
            <v-btn @click="acceptContract()" color="success">Prihvati</v-btn>
            <v-btn @click="blockContract()" color="error">Odbij</v-btn>
          </div>
        </v-list-item-content>
      </v-list-item>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { error } from 'util'
import firebase, { functions } from 'firebase'
import { db } from '@/plugins/firebase'
import web3 from '@/contracts/web3'
import process_contract from '@/contracts/process_contract'
import obrazac from '@/contracts/obrazac_instance'

const oib = require('oib.js')

export default {
  data() {
    return {
      contracts: {},
      selectedIndex: 0
    }
  },
  created() {
    this.getContracts()
  },
  methods: {
    getContracts() {
      let query = db.collection('obrazac-kuca-za-odmor').where('ime', '>', '')
      query
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.contracts = {
              ime: doc.data().ime,
              adresa: doc.data().adresa
            }
          })
        })
        .catch(function(error) {
          console.log('Erorr', error)
        })
    },
    blockContract() {
      web3.eth.getAccounts().then(accounts => {
        const selected = obrazac(this.contracts)
        selected.methods.blockContract()
      })
    },
    blockContract() {
      web3.eth.getAccounts().then(accounts => {
        const selected = obrazac(this.contracts)
        selected.methods.acceptDocument()
      })
    }
  },
  onChange: function(event) {
    this.selectedIndex = event.target.contracts.ime
  }
}
</script>

<style>
</style>