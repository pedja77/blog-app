import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

export default class Posts {
  getAll() {
    return axios.get(`/posts?filter={"include": ["comments"]}`);
  }

  get(id) {
      return axios.get(`/posts/${id}?filter={"include": ["comments"]}`)
  }

  add(post) {
      return axios.post('/posts', post)
  }

  edit(id, post) {
      return axios.put(`/posts/${id}`, post)
  }

  delete(id) {
      return axios.delete(`/posts/${id}`)
  }

  addComment(comment, postId) {
      return axios.post(`/posts/${postId}/comments`,comment)
  }
}

export const posts = new Posts();
