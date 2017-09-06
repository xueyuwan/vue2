<template>
  <div id="app" style="height: 100%;">
      <router-view></router-view>
  </div>
</template>
<script>
import sidebar from "./components/sidebar"
export default {
  components: {
    sidebar
  },
  name: 'app',
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fillcontain ul {
  width: 240px;
}
</style>

