import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

export default class Posts {
  getAll() {
    return axios.get("/posts");
  }
}

export const posts = new Posts();
