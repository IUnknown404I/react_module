import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
        let params = {}

        if(+limit===-1) {
            params = {_limit: limit}
        }
        else {
            params._limit = limit;
            params._page = page;
        }

         const response = await axios.get('https://jsonplaceholder.typicode.com/posts',
             {params});

         return response;
    }

    static async getById(id) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }

    static async getCommentByPost(id) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    }
}