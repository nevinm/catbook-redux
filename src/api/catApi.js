// https://github.com/github/fetch
// response.json() returns a promise

class CatApi {
  static getAllCats() {
    return fetch('http://localhost:3000/posts/')
    .then(response => response.json())
    .catch(error => error);
  }

  static addCat(data) {
    return fetch('http://localhost:3000/posts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .catch(error => error);
  }
}

export default CatApi;
