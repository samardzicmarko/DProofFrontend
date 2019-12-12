<template>
  <v-alert dense text type="success">
    {{message}}
    <br />
  </v-alert>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style>
</style>