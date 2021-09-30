<template>
  <article class="Article" @click="$router.push('/' + articleData.id)">
    <img src="@/assets/1.png" alt="" />
    <h2 class="Article__title">{{ articleData.name }}</h2>
    <p class="Article__description">{{ articleData.description }}</p>
    <div class="Article__info">
      <span class="Article__date">{{ articleData.date }}</span>
      <LikeButton
        :quantityLike="articleData.like"
        :isLiked="articleData.isLiked"
        @click.stop="clickOnLike(articleData.isLiked, articleData.id)"
      />
    </div>
  </article>
</template>

<script>
import LikeButton from "@/components/Ui/LikeButton";
import articleMixins from "@/mixins/article"
export default {
  components: { LikeButton },
  props: {
    articleData: {
      type: Object,
      default: () => ({}),
    },
  },
  mixins: [articleMixins]
};
</script>

<style scoped lang="scss">
.Article {
  padding: 10px;
  background: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  &:hover .Article__title {
    text-decoration: underline;
  }
  .Article__title {
    margin-top: 21px;
    font-size: 18px;
    font-weight: 500;
  }
  .Article__info {
    display: flex;
    justify-content: space-between;
    margin-top: 13px;
  }
  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  @media(max-width: 400px) {
    img {
      height: 150px;
    }
  }
}
</style>
