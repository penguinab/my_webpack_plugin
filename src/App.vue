<template>
  <div id="app">
    <PenBtn/>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <RenderTest/>
  </div>
</template>

<script>
import PenBtn from "./components/PenBtn";
import HelloWorld from "./components/HelloWorld.vue";
import RenderTest from './components/RenderTest.vue'
export default {
  name: "App",
  components: {
    PenBtn,
    HelloWorld,
    RenderTest
  },
};
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
