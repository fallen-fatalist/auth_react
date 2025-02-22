import axios from "axios";

const postsURL = "https://jsonplaceholder.org/posts"

export default class PostService {
    static async getAll(limit = 10, page = 1) {
            const response = await axios.get(postsURL, {
                params: {
                    _limit: limit,
                    _page: page
                }
            })

            return response
    }
}