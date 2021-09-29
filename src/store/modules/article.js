import api from "@/API";
import use from "../use"

export default {
  namespaced: true,
  state() {
    return {
      articles: {},
    };
  },
  getters: {
    articles: ({ articles }) => articles,
  },
  mutations: {
    SET_ARTICLES(state, payload) {
      state.articles = payload;
    },
    ADD_LIKE(state, id) {
      state.articles[id].like++;
      state.articles[id].isLiked = true
    },
    REMOVE_LIKE(state, id) {
      state.articles[id].like--;
      state.articles[id].isLiked = false
    },
  },
  actions: {
    async getArticles({ commit }) {
      let { data } = await api.article.loadArticles();
      data = data.reduce((acc, itm) => {
        acc[itm.id] = itm;
        if(localStorage.likes){
          acc[itm.id].like = JSON.parse(localStorage.likes)[itm.id].like
          acc[itm.id].isLiked = JSON.parse(localStorage.likes)[itm.id].isLiked
        }
        return acc;
      }, {});
      commit("SET_ARTICLES", data);
    },
    async incrementLike({ commit, state }, id) {
      await api.article.changeLike({ id, like: state.articles[id].like + 1 });
      commit("ADD_LIKE", id);
      use.loadOnLocalStorage(state.articles)
    },
    async decrementLike({ commit, state }, id) {
      await api.article.changeLike({ id, like: state.articles[id].like - 1 });
      commit("REMOVE_LIKE", id);
      use.loadOnLocalStorage(state.articles)
    },
  },
};
