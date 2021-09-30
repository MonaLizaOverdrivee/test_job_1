<template>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => this.$store.dispatch('article/getArticles'));
  },
};
</script>
