<!--
 * @Author: your name
 * @Date: 2020-06-07 20:19:20
 * @LastEditTime: 2020-07-14 20:58:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuemian\app\src\App.vue
--> 
<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/counter">counter</router-link>
      <router-link to="/about">about</router-link>
      <router-view></router-view>

      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
