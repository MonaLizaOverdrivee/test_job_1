export default (axios) => ({
  loadArticles: () => axios.get("posts"),
  changeLike: (article) => axios.patch(`posts/${article.id}`, article)
})
