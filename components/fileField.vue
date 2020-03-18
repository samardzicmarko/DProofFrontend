<template>
  <b-form @submit.stop.prevent>
    <div v-show="editing == false">
      <label @click="editLabel()" for="text">{{ label }}</label>
    </div>
    <b-form-file
      v-model="file"
      :state="Boolean(file)"
      placeholder="Odaberite datoteku na računalu, ili je povucite na polje"
      drop-placeholder="Povucite datoteku ovdje..."
    >
      <div class="mt-3">Odabrane datoteke: {{file ? file.name : ''}}</div>
    </b-form-file>
  </b-form>
</template>

<script>
export default {
  props: ['label'],
  data() {
    return {
      editedLabel: null,
      editing: false,
      file: null,
      file2: null
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

<style >
#input-label {
  padding: 10px;
}
</style>