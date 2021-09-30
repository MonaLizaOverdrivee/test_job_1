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
