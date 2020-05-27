<template>
  <div class="container">
    <v-card height="700">
      <div class="container">
        <v-card-title class="justify-center">
          Ladice
        </v-card-title>
        <v-card-body>
          <div class="row">
            <div class="col-4">
              <div class="card">
                <v-card-title>Aktivne ladice</v-card-title>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <v-card-title>Za obradu</v-card-title>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <v-card-title>Arhiva ladica</v-card-title>
              </div>
            </div>
          </div>
        </v-card-body>
        <v-card id="admin-panel">
          <div class="container">
            <v-card-title class="justify-center">Administracija</v-card-title>
            <v-card-body>
              <div class="row">
                <div class="admin-btns">
                  <v-card-actions class="justify-center">
                    <v-btn class="primary" to="/ladica/new">Dodaj ladicu</v-btn>
                    <v-btn class="primary">Uredi ladicu</v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-card-body>
          </div>
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {}
</script>

<style>
.admin-panel {
  position: absolute;
  bottom: 0;
  display: inline-block;
}
</style>
