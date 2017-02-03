class CatApi {
  static getAllCats() {
    return fetch('http://localhost:3000/posts/')
    .then(response => response.json())
    .catch(error => error);
  }
}

export default CatApi;
