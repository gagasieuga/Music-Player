<template>
  <div id="app">
    <Header></Header>
    <SlideContainer></SlideContainer>
    <Content></Content>
    <About></About>
    <Service></Service>
  </div>
</template>

<script>
import SlideContainer from './components/SlideContainer.vue';
import Content from './components/Content.vue';
import About from './components/About.vue';
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    SlideContainer,
    Content,
    About,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
