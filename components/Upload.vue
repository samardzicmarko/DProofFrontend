<template>
  <div class="file-upload-item">
    <b-card bg-variant="info" text-variant="white" title="Učitavanje dokumenata">
      <b-card-text>Molimo povucite dokumente koje želite predati u DocumentProof</b-card-text>
      <b-button href="#" variant="primary">Učitaj</b-button>
      
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadedFiles: []
    }
  },
  methods: {
    uploadFile: function(f) {
      let self = this
    }
  }
}
</script>

<style>
</style>