<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/erpModal">About</router-link>
    <el-button type="primary" @click="toMenu">菜单</el-button>
    <el-button type="primary" @click="toWordsModal">菜单</el-button>
  </div>
  <router-view/>
</template>

<script>
  export default {
    methods: {
      toMenu() {
        this.$router.push('/codeNote')
      },
      toWordsModal() {
        this.$router.push('/words-modal')
      },
    }
  }
</script>
<style>
#app, body, html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
