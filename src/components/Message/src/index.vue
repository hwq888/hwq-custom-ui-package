<template>
  <div class="hello">
    <Other></Other>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Other from './other'
export default {
  name: 'Message',
  components: { Other },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  color: #42b983;
}
</style>
