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

<style scoped lang="scss">
.container {
  max-width: 917px;
  margin: 0 auto;
}
.ArticlePage__header {
  .ArticlePage__header-poster {
    width: 100%;
    height: 398px;
    object-fit: cover;
  }
  @media (max-width: 640px) {
    .ArticlePage__header-poster {
      height: 200px;
    }
  }
}
.Article__date-page {
  margin-top: 20px;
}
.Article__description-page {
  margin-top: 35px;
  line-height: 22px;
}
.ArticlePage__title {
  margin-top: 10px;
  font-size: 38px;
  font-weight: 500;
}
.ArticlePage__like {
  margin-top: 25px;
}
.ArticlePage__buttons {
  margin-top: 20px;
  border-top: 1px solid #8dbe50;
  padding: 10px 0 64px;
}
</style>
