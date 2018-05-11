<template>
  <div class="hello">
    <button @click="toIndex">跳转至正式页面</button>
  </div>
</template>

<script>
export default {
  methods:{
    toIndex(){
      this.$router.push({name:'index',params:{"key":"01"}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
