<template>
  <div class="home-page-user">
    <section class="h-100">
      <div class="content">
        <div class="news-panel">
          <b-card no-body>
            <b-card-header>
              <b-nav card-header tabs>
                <b-nav-item active>Novosti</b-nav-item>
              </b-nav>
            </b-card-header>
            <b-card-body class="text-center">
              <b-card-title>Najnovije obavjesti</b-card-title>
              <b-list-group class="flex-column align-items-start">
                <b-list-group-item style="width:100%;">
                  <div class="d-flex justify-content-between">
                    <h5 class="mb-1">Naslov novosti</h5>
                    <small class="text-muted">3 days ago</small>
                  </div>
                  <p>
                    <b-card-text class="news-short-text">Novi termin upisa i radno vrijeme</b-card-text>
                  </p>
                  <small class="link">Prikaži više</small>
                </b-list-group-item>
              </b-list-group>
            </b-card-body>
          </b-card>
        </div>
        <div id="file-panel">
          <b-card bg-variant="info" text-variant="white" title="Učitavanje dokumenata">
            <b-card-text>Molimo povucite dokumente koje želite predati u DocumentProof</b-card-text>
            <b-button href="#" variant="primary">Učitaj</b-button>
          </b-card>
        </div>
      </div>
      <div class="pending-files">
        <b-card header="Datoteke na čekanju" class="text-center">
          <b-card-text>
            Trenutno imate 3 dokumenta koje morate predati. Rok za predaju je:
            <strong>24.12.2019</strong>
          </b-card-text>
        </b-card>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data(){
    return {
      files: []
    }
  },
}
</script>

<style>
.news-short-text {
  text-align: left;
}
#file-panel {
  margin-top: 20px;
}
.news-panel {
  margin-top: 20px;
}
.pending-files {
  margin-top: 20px;
}
</style>