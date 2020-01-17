<template>
  <v-card height="800px" class="mx-auto">
    <v-navigation-drawer permanent left>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Hrvoje Horvat</v-list-item-title>
            <v-list-item-subtitle>Prijavljeni</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item @click to="/">
          <v-list-item-content>
            <v-list-item-title>Početna</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click to="/dokumenti">
          <v-list-item-content>
            <v-list-item-title>Dokumenti</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click to="/users">
          <v-list-item-content>Korisnici</v-list-item-content>
        </v-list-item>
        <v-list-item @click to="/obrasci">
          <v-list-item-content>Obrasci</v-list-item-content>
        </v-list-item>
        
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Odjava</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Početna' },
        { title: 'Profil' },
        { title: 'Moji dokumenti' }
      ]
    }
  }
}
</script>
