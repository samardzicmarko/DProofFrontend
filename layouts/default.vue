<template>
<v-app>
  <div id="container-fluid">
    <TheHeader></TheHeader>
    <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="row">
        <div class="col-md-2 col-sm-2 col-xs-2">
          <Sidebar></Sidebar>
        </div>
        <div class="col-md-8 col-sm-8 col-xs-8">
          <nuxt />
        </div>
      </div>
    </div>
    <TheFooter></TheFooter>
  </div>
</v-app>
</template>
<script>
import TheHeader from '~/components/Navigation/TheHeader.vue'
import TheFooter from '~/components/Navigation/TheFooter.vue'
import Sidebar from '~/components/Navigation/Sidebar.vue'

export default {
  components: {
    TheHeader,
    Sidebar,
    TheFooter
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.app-container {
  height: 100%;
  position: relative;
  display: grid;
  grid-template: auto 1fr auto / 1fr;
}

.app-content {
  min-height: 100vh;
  padding: 24px;
  display: grid;
  align-items: center;
  justify-items: center;
}
</style>
