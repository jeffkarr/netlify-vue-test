<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Articles msg="Welcome to Netlify Vue Test Page"/>
  </div>
</template>

<script>
import Articles from './components/Articles.vue'

export default {
  name: 'App',
  components: {
    Articles
  },
  data() {
    // articles: []
  },
  created: function () {
    // this.message = await 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
