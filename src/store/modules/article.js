import api from "@/API";

export default {
  namespaced: true,
  state() {
    return {
      articles: []
    };
  },
  getters: {
    articles: ({ articles }) => articles
  },
  mutations: {
    SET_ARTICLES(state, payload) {
      state.articles = payload
    }
  },
  actions: {
    async getArticles({ commit }) {
      const { data } = await api.aricle.loadArticles()
      commit('SET_ARTICLES', data)
    },
  },
};
