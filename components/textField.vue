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
      <b-input id="text" type="text"></b-input>
    </div>
  </b-form>
</template>

<script>
export default {
  props: ['label'],

  data() {
    return {
      editedLabel: null,
      editing: false
    }
  },

  methods: {
    editLabel: function(label) {
      console.log('usao')
      this.editing = true
      this.editedLabel = label
    }
  }
}
</script>

<style>
#input-label {
  padding: 10px;
}
</style>
