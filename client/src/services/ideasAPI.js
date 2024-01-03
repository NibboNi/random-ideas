import axios from "axios";

class IdeasAPI {
  #apiURL;
  constructor() {
    this.#apiURL = "http://localhost:5000/api/ideas";
  }

  getIdeas() {
    return axios.get(this.#apiURL);
  }
}

export default new IdeasAPI();
