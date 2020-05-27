<template>
  <b-form @submit.stop.prevent>
    <div v-show="editing == false">
      <label @click="editLabel()" for="text">{{ label }}</label>
    </div>
    <div id="input-label">
      <input
        v-show="editing == true"
        v-model="label"
        v-on:blur="
          editedLabel = false
          $emit('update')
        "
        @keyup.enter="
          editedLabel = false
          $emit('update')
        "
      />
      <b-input id="text" type="text" :rules="[oibID]"></b-input>
    </div>
  </b-form>
</template>

<script>
const oib = require('oib.js')
export default {
  props: ['label'],
  data() {
    return {
      editedLabel: null,
      editing: false
    }
  },
  rules: {
    oibID: value => {
      return oib.validate(value) || 'Neispravan OIB'
    }
  },
  methods: {
    editedLabel: function(label) {
      this.editing = true
      this.editedLabel = label
    }
  }
}
</script>

<style></style>
