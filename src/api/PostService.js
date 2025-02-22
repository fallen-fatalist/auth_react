import axios from "axios";

const postsFetchURL = "https://jsonplaceholder.typicode.com/posts/"


export default class PostService {
    static async getAllPosts(limit = 10, page = 1) {
            const response = await axios.get(postsFetchURL, {
                params: {
                    _limit: limit,
                    _page: page
                }
            })

            return response
    }

    static async getPostById(id) {
            return await axios.get(postsFetchURL + id)
    }

    static async getCommentsByPostId(id) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    }
}