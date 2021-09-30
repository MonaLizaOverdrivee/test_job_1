import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("article", ["decrementLike", "incrementLike"]),
    clickOnLike(isLiked, id) {
      isLiked ? this.decrementLike(id) : this.incrementLike(id);
    },
  },
};
