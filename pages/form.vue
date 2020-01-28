<template>
  <v-card class="mx-auto" height="100%">
    <v-card-title>Nova forma</v-card-title>
    <v-col ref="form" cols="7" md="8">
      <div class="form-group">
        <textField :label="input"></textField>
      </div>
    </v-col>
  </v-card>
</template>

<script>
import textField from '@/components/textField'
export default {
  components: {
    textField: textField
  },
  data() {
    return {
      input: 'input'
    }
  }
}
</script>

<style></style>
