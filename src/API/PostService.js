import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
         const response = await axios.get('https://jsonplaceholder.typicode.com/posts',
             {params: {
                     _limit: limit,
                     _page: page,
                 }});

         return response;
    }

    static async getById(id) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }

    static async getCommentByPost(id) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    }
}