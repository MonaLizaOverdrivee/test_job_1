<template>
  <button class="Like"><i :class="likeClass"></i> {{ quantityLike }}</button>
</template>

<script>
export default {
  props: {
    quantityLike: {
      type: Number,
      default: 0,
    },
    isLiked: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    likeClass() {
      return this.isLiked ? "fas fa-heart active" : "far fa-heart";
    },
  },
};
</script>
