<template>
  <main class="container">
    <router-view />
  </main>
</template>

<script>
// import HelloWorld from "./Views/Home";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
};
</script>

<style lang="scss">
#app {
  margin-top: 60px;
}
main {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 30px;
}
</style>
