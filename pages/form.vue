<template>
  <v-card class="mx-auto" height="100%">
    <v-card-title>Nova forma</v-card-title>
    <b-row align-h="center">
      <b-col cols="8">
        <div id="form-toolbar" class="text-center">
          <v-card-actions>
            <v-btn class="ma-2" outlined color="indigo">Novo tekstualno polje</v-btn>
            <v-btn class="ma-2" outlined color="success">Novo polje za privitak</v-btn>
          </v-card-actions>
        </div>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="8">
        <div class="form-group">
          <textField :label="input" v-model="textInput.text"></textField>
        </div>
        <div class="form-group">
          <fileField :label="input"></fileField>
        </div>
      </b-col>
      <v-card-actions>
        <v-btn class="ma-2" outlined color="indigo" @click="save()">Spremi formu</v-btn>
      </v-card-actions>
    </b-row>
  </v-card>
</template>

<script>
import textField from '@/components/textField'
import fileField from '@/components/fileField'
export default {
  components: {
    textField: textField,
    fileField: fileField
  },
  data() {
    return {
      input: 'input',
      textFields: [],
      fileFields: [],
      textInput: {
        label: '',
        text: ''
      },
      file: null
    }
  },
  methods: {

    save: function(type) {
      textFields.push(this.textInput)
      alert(JSON.stringify(this.textFields))
    },
    saveForm() {
      db.collection('form')
        .add({
          textField: this.textFields,
          fileField: this.fileFields
        })
        .then(docRef => {
          this.$router.push('/post')
        })
    }
  }
}
</script>

<style></style>
