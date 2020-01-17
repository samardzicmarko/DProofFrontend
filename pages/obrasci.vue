<template>
  <div class="obrasci">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn class="ma-2" outlined color="indigo" v-on="on">Dodaj kategoriju</v-btn>
          <v-btn class="ma-2" outlined color="indigo" v-on="on">Filtriraj</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Dodavanje kategorije Obrasca</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Naziv nove kategorije za Obrasce"
                    hint="Neka naslov bude jasan i specifičan za tu kategoriju!"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Odustani</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Spremi</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-expansion-panels :multiple="multiple">
      <v-expansion-panel class="mb-6" v-for="(item, i) in 5" :key="i">
        <v-expansion-panel-header expand-icon="mdi-menu-down">Obrazac</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="mx-2" id="addObrazac" fab outlined dark x-small color="#9be3de" to="noviObrazac">
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </v-card-actions>Obrazac za prijavu štete od elementarne nepogode
          <v-btn class="mx-2" id="editObrazac" outlined fab dark x-small color="#9be3de">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style>
#editObrazac {
  float: right;
}
#addObrazac {
  float: right;
}
</style>