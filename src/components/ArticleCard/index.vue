<template>
  <article class="Article" @click="$router.push('/' + articleData.id)">
    <img src="@/assets/1.png" alt="" class="Article__poster" />
    <h2 class="Article__title">{{ articleData.name }}</h2>
    <p class="Article__description">{{ articleData.description }}</p>
    <div class="Article__info">
      <date class="Article__date">{{ articleData.date }}</date>
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
import articleMixins from "@/mixins/article";
export default {
  components: { LikeButton },
  props: {
    articleData: {
      type: Object,
      default: () => ({}),
    },
  },
  mixins: [articleMixins],
};
</script>

