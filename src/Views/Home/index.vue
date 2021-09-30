<template>
  <section class="News">
    <ArticleCard v-for="itm in articles" :key="itm.id" :articleData="itm" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ArticleCard from "@/components/ArticleCard";
export default {
  components: { ArticleCard },
  computed: {
    ...mapGetters("article", ["articles"]),
  },
};
</script>

<style scoped lang="scss">
.News {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}
@media (max-width: 1440px) {
  .News {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media (max-width: 1024px) {
  .News {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 768px) {
  .News {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
