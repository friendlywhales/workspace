const axios = window.axios;

const BASE_API_URL = 'http://127.0.0.1:8000/api'

export default {
    getAllPosts: () =>
        axios.get(`${BASE_API_URL}/posts`),
    getOnePost: (id) =>
        axios.get(`${BASE_API_URL}/posts/${id}/edit`),
    addPost: (post) =>
        axios.post(`${BASE_API_URL}/posts`, post),
    updatePost: (post) =>
        axios.put(`${BASE_API_URL}/posts/${id}`, post),
    deletePost: (id) =>
        axios.delete(`${BASE_API_URL}/posts/${id}`),
}