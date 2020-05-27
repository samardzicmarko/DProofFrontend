<template>
  <div>
    <div v-show="editing == false">
      <label @click="editLabel()" for="text">{{ label }}</label>
    </div>
    <b-form-textarea id="textarea" placeholder="Unesite tekst ovdje..." rows="3" max-rows="6"></b-form-textarea>
  </div>
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
    editedLabel: function(label) {
      this.editing = true
      this.editedLabel = label
    }
  }
}
</script>

<style>
</style>