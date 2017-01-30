class CatApi {
  static getAllCats() {
    return fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .catch(error => error);
  }
}

export default CatApi;
