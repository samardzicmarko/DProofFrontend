<template>
  <div>
    <b-form-select
      id="input-3"
      v-model="form.food"
      :options="options"
      required
    ></b-form-select>
  </div>
</template>

<script>
export default {
  porps: {
    label: {
      type: String
    },
    options: {
      type: Array
    }
  },

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

<style></style>
