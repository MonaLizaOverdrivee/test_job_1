<template>
  <span class="Heart"> <i :class="likeClass"></i> {{ quantityLike }} </span>
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
  data() {
    return {};
  },
  computed: {
    likeClass() {
      return this.isLiked ? "fas fa-heart active" : "far fa-heart";
    },
  },
  methods: {
    clickOnLike() {},
  },
};
</script>

<style scoped lang="scss">
.Heart {
  font-size: 12px;
  color: #909599;
  .active {
    color: #eb5757;
  }
  .far, .fas {
    padding-right: 5px;
    cursor: pointer;
  }
  i:hover {
    color: #eb5757;
  }
}
</style>
