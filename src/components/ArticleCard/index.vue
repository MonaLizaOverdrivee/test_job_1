<template>
  <article class="Article">
    <img src="@/assets/1.png" alt="" />
    <h2 class="Article__title">{{ articleData.name }}</h2>
    <p class="Article__description">{{ articleData.description }}</p>
    <div class="Article__info">
      <span class="Article__info-date">{{ articleData.date }}</span>
      <LikeButton
        :quantityLike="articleData.like"
        :isLiked="articleData.isLiked"
        @click="clickOnLike(articleData.isLiked, articleData.id)"
      />
    </div>
  </article>
</template>

<script>
import LikeButton from "@/components/Ui/LikeButton";
import { mapActions } from "vuex";
export default {
  components: { LikeButton },
  props: {
    articleData: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions("article", ["decrementLike", "incrementLike"]),
    clickOnLike(isLiked, id) {
      isLiked ? this.decrementLike(id) : this.incrementLike(id);
    },
  },
};
</script>

<style scoped lang="scss">
.Article {
  padding: 10px;
  background: #ffffff;
  border-radius: 4px;
  .Article__title {
    margin-top: 21px;
    font-size: 18px;
    font-weight: 500;
  }
  .Article__description {
    margin-top: 28px;
    font-size: 15px;
    font-weight: 400;
  }
  .Article__info {
    display: flex;
    justify-content: space-between;
    margin-top: 13px;
  }
  .Article__info-date {
    color: #909599;
    font-size: 13px;
    font-weight: 300;
  }
  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
}
</style>
