<template>
  <div id="app">
    <NegotiationApp/>
  </div>
</template>

<script>
import NegotiationApp from './components/NegotiationApp'

export default {
  name: 'App',
  components: {
    NegotiationApp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
