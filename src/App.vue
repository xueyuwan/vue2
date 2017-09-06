<template>
  <div id="app" style="height: 100%;">
    <div class="manage_page" style="height: 100%;">
      <el-row style="height: 100%;">
        <el-col :span="4" style="min-height: 100%; background-color: #324057;">
          <sidebar></sidebar>
        </el-col>
        <el-col :span="20" style="height: 100%;overflow: auto;">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-col>
      </el-row>
    </div>
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

