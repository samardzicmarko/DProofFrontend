<template>
  <v-card class="mx-auto">
    <v-list-item-title class="headline mb-1">Kreiraj novi obrazac</v-list-item-title>
    <div class="created-form">
      <v-list>
        <v-list-group v-for="input in obrazac">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="input.form"></v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>

        </v-list-group>
      </v-list>
    </div>
    <form>
      <div class="row">
        <div class="col-8">
            <v-btn class="ma-2" @click="loader = 'loading'">
            Accept Terms
            </v-btn>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
        
        </div>
        <div class="col-8" id="nazivObrazca">
          <input type="text" class="form-control" placeholder="Naziv obrasca" />
        </div>
      </div>
    </form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      
      obrazac: {
        form: {
          label: '',
          required: '',
          types: [
            'text',
            'number',
            'email',
            'password',
            'url',
            'date',
            'time',
          ],
        }
      }
    }
  }
}
</script>

<style>
</style>