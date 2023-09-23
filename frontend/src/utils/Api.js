class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _chechRes = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      methods: 'GET',
      credentials: 'include',
    })
      .then(this._chechRes);
  }


  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      methods: 'GET',
      credentials: 'include',
    })
      .then(this._chechRes)
  }

  editProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        about: about
      }),
    })
      .then(this._chechRes);
  }

  changeAvatar(src) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify({
        avatar: src
      })
    })
      .then(this._chechRes);
  }

  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then((res) => {
        console.log(res);
        return res;
      })
      .then(this._chechRes);
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      body: JSON.stringify({
        _id: id
      })
    })
      .then(this._chechRes);
  }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify({
          _id: id
        })
      })
        .then(this._chechRes)
    }
    else {
      return fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: 'DELETE',
        credentials: 'include',
        body: JSON.stringify({
          _id: id
        })
      })
        .then(this._chechRes)
    }
  }

}

const api = new Api({
  baseUrl: 'http://localhost:3001', //https://api.phentality.nomoredomainsrocks.ru
});

export default api;

