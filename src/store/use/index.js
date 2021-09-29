export default class {
  static loadOnLocalStorage(obj){
    const likes = Object.keys(obj).reduce((acc, itm) => {
      acc[itm] = {
        like: obj[itm].like,
        isLiked: obj[itm].isLiked
      }
      return acc
    }, {})
    localStorage.setItem('likes', JSON.stringify(likes))
  }
  static responseParse(response){
    return response.reduce((acc, itm) => {
      acc[itm.id] = itm;
      if(localStorage.likes){
        acc[itm.id].like = JSON.parse(localStorage.likes)[itm.id].like
        acc[itm.id].isLiked = JSON.parse(localStorage.likes)[itm.id].isLiked
      }
      return acc;
    }, {});
  }
}