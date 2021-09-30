<template>
  <header class="ArticlePage__header">
    <img src="@/assets/2.png" alt="" class="ArticlePage__header-poster" />
  </header>
  <div class="container">
    <div class="Article__date Article__date-page">{{ dataArticle.date }}</div>
    <h1 class="ArticlePage__title">{{ dataArticle.name }}</h1>
    <p class="Article__description Article__description-page">{{ dataArticle.detail_text }}</p>
    <div class="ArticlePage__like">
      <LikeButton
        :quantityLike="dataArticle.like"
        :isLiked="dataArticle.isLiked"
        @click.stop="clickOnLike(dataArticle.isLiked, dataArticle.id)"
      />
    </div>
    <div class="ArticlePage__buttons">
      <TagButton :label="dataArticle.tag" />
    </div>
  </div>
</template>

<script>
import LikeButton from "@/components/Ui/LikeButton";
import TagButton from "@/components/Ui/TagButton";
import articleMixins from "@/mixins/article"
export default {
  components: { LikeButton, TagButton },
  props: ["id"],
  computed: {
    dataArticle() {
      return this.$store.getters["article/articles"][this.id];
    },
  },
mixins: [articleMixins]
};
</script>
