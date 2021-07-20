<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Articles msg="Welcome to Netlify Vue Test Page"/>
    <ul>
      <li v-for="article in articles" :key="article.title">
        {{ article.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import Articles from './components/Articles.vue'

export default {
  name: 'App',
  components: {
    Articles
  },
  data () {
    return {
      // question: '',
      answer: '',
      articles: []
    }
  },
  created: function () {
    // this.message = await 
    let self = this;
    fetch('/api/getArticles')
    .then(resp => resp.json())
    .then(data => {
      console.log(data.data)
      self.articles = data.data;
    });

    fetch('/api/answer')
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      self.answer = data.answer;
    });

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
