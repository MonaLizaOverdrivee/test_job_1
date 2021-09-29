<template>
  <HelloWorld  />
</template>

<script>
import HelloWorld from "./Views/Home";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
#app {
  margin-top: 60px;
}
</style>
