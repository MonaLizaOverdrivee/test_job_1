<template>
<div class="container">
  {{ dataArticle }}
</div>
</template>

<script>
export default {
props: ['id'],
computed: {
  dataArticle() {
    return this.$store.getters['article/articles'][this.id]
  }
}
}
</script>

<style scoped>
.container {
  width: 917px;
  margin: 0 auto;
}
</style>