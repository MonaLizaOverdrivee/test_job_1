<template>
  <div>
    <div class="container">
      <section class="News">
        <ArticleCard v-for="itm in articles" :key="itm.id" :articleData="itm" />
      </section>
      <pre>
    </pre
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ArticleCard from '@/components/ArticleCard'
export default {
  components: { ArticleCard },
  props: {},
  computed: {
    ...mapGetters("article", ["articles"]),
  },
  methods: {
    ...mapActions("article", ["getArticles"]),
  },
  mounted() {
    this.$nextTick(() => this.getArticles());
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 1920px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0 30px;
}
.News {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}
</style>
