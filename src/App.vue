<template>
  <div id="app">
    <Message msg="欢迎调用npm公共组件：Message"/>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <Dialog :dialogVisible.sync="dialogVisible" :dialogData="dialogData"/>
  </div>
</template>

<script>
import Message from './components/Message/src/index'
import Dialog from './components/Dialog/src/index'
import { test } from './utils'

export default {
  name: 'app',
  components: {
    Message, Dialog
  },
  data () {
    return {
      dialogVisible: false,
      dialogData: {
        msg: '弹窗参数'
      }
    }
  },
  mounted () {
    test.getNowTime()
    test.showMessage('测试一下utils的运用')
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
