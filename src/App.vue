<template>
  <div id="app">
    <Message msg="欢迎调用npm公共组件：Message"/>
    <Dialog />
  </div>
</template>

<script>
import Message from './components/Message/src/index'
import Dialog from './components/Dialog/src/index'

export default {
  name: 'app',
  components: {
    Message, Dialog
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
