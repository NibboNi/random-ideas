import axios from "axios";

class IdeasAPI {
  #apiURL;
  constructor() {
    this.#apiURL = "/api/ideas";
  }

  getIdeas() {
    return axios.get(this.#apiURL);
  }

  createIdea(data) {
    return axios.post(this.#apiURL, data);
  }

  updateIdea(id, data) {
    return axios.put(`${this.#apiURL}/${id}`, data);
  }

  deleteIdea(id) {
    const username = localStorage.getItem("username")
      ? localStorage.getItem("username")
      : "";

    return axios.delete(`${this.#apiURL}/${id}`, {
      data: { username },
    });
  }
}

export default new IdeasAPI();
