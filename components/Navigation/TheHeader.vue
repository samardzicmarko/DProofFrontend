<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>DocumentProof</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!$auth.loggedIn">
        <v-btn text to="/login">Prijava</v-btn>
        <v-btn text to="/register">Registracija</v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <v-btn text to="/user">Ime</v-btn>
        <v-btn text to="/logout">Odjava</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style></style>
