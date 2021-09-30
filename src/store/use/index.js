export default class {
  static loadOnLocalStorage(obj) {
    const likes = Object.keys(obj).reduce((acc, itm) => {
      acc[itm] = {
        like: obj[itm].like,
        isLiked: obj[itm].isLiked,
      };
      return acc;
    }, {});
    localStorage.setItem("likes", JSON.stringify(likes));
  }
  static responseParse(response) {
    const local = JSON.parse(localStorage.getItem("likes"));
    return response.reduce((acc, itm) => {
      acc[itm.id] = local ? { ...itm, like: local[itm.id].like, isLiked: local[itm.id].isLiked } : itm;
      return acc;
    }, {});
  }
}
