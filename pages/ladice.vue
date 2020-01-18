<template>
  <div>
    <b-card-group>
      <b-card>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Naziv ladice:"
        label-for="input-1"
        description="Naziv ladice mora biti jedinstven!"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="name"
          required
          placeholder="Unesite naziv ladice"
        ></b-form-input>
      </b-form-group>
      

       <b-form-group id="input-group-2" label="Obavezni obrasci:" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="form.file"
          :options="files"
          required
        ></b-form-select>
      </b-form-group>

     <b-form-group id="input-group-3" label="Datum isteka police:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.date"
          required
          placeholder="Unesi datum"
          type="date"
        ></b-form-input>
      </b-form-group>
       
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="primary">Reset</b-button>
    </b-form>
    </b-card>
      </b-card-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          date: '',
          file: null,
          
        },
        files: [{ text: 'Odaberi sve potrebne obrasce', value: null }, 'Obrazac za prijavu štete od elementarne nepogode'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.date = ''
        this.form.file = null
        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>