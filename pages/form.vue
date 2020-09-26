<template>
  <div class="container">
    <v-card class="mx-auto" height="100%">
      <div class="page-header">
        <v-card-title>Nova forma</v-card-title>
      </div>
      <b-row align-h="center">
        <b-col cols="8">
          <div id="form-toolbar" class="text-center">
            <v-dialog v-model="dialog" max-width="400px">
              <template v-slot:activator="{ on }">
                <div class="toolbar">
                  <p>Alatna traka</p>
                  <v-btn v-on="on" @click="currentComponent = 'textField'">Unos teksta</v-btn>
                  <v-btn v-on="on">Broj</v-btn>
                  <v-btn v-on="on" @click="currentComponent = 'oibInput'">OIB</v-btn>
                  <v-btn v-on="on">E-mail</v-btn>
                  <v-btn v-on="on" @click="currentComponent = 'fileField'">Prilog</v-btn>
                  <v-btn v-on="on" @click="currentComponent = 'textArea'">Tekst s više redaka</v-btn>
                  <v-btn v-on="on" @click="currentComponent = 'select'">Odabir od ponuđenog</v-btn>
                </div>
              </template>
              <v-card style="height: 300px;">
                <v-card-title>Dodavanje nove komponente</v-card-title>
                <div class="container">
                  <v-text-field label="Unesite oznaku polja" v-model="textInput.label"></v-text-field>
                  <v-checkbox v-model="textInput.required" label="Obavezno polje?"></v-checkbox>
                  <addOptions v-if="currentComponent === 'select'" />
                </div>

                <v-card-actions>
                  <v-btn class="primary" @click="addNewInput(currentComponent)">Spremi</v-btn>
                  <v-btn class="secondary" @click="dialog = false">Odustani</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col>
          <div id="nesto">
            <div class="container">
              <div class="form-gorup">
                {{ component }}
                <component :is="component.type" v-bind="component" v-for="component in components"></component>
              </div>
            </div>

            <v-card-actions>
              <v-btn class="ma-2" outlined color="indigo" @click="save()">Spremi formu</v-btn>
            </v-card-actions>
          </div>
        </b-col>
      </b-row>
    </v-card>
  </div>
</template>

<script>
import textField from '@/components/inputComponents/textField'
import fileField from '@/components/inputComponents/fileField'
import textArea from '@/components/inputComponents/textArea'
import oibInput from '@/components/inputComponents/oibInput'
import select from '@/components/inputComponents/select'
import addOptions from '@/components/addOptions'

export default {
  components: {
    textField: textField,
    fileField: fileField,
    textArea: textArea,
    oibInput: oibInput,
    select: select,
    addOptions: addOptions
  },
  data() {
    return {
      input: 'input',
      currentComponent: 'textField',
      textFields: [],
      fileFields: [],
      textInput: {
        label: '',
        text: '',
        required: false
      },
      new_option: '',
      components: [],
      file: null,
      dialog: false,
      label: '',
      types: ['Tekstualni unos', 'Broj', 'Datum', 'Datoteka']
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
    },
    addNewInput(type) {
      console.log('usao u funkciju')
      this.components.push({
        type: this.currentComponent,
        label: this.textInput.label,
        input: ''
      })
    }
  }
}
</script>

<style>
.page-header {
  margin-left: auto;
  margin-right: auto;
  display: table;
}
</style>
