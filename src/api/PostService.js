import axios from "axios";
import { createRef } from "react";

const postsURL = "https://jsonplaceholder.typicode.com/posts"

export default class PostService {
    static async getAll(limit = 10, page = 1) {
            const response = await axios.get(postsURL, {
                params: {
                    _limit: limit,
                    _page: page
            }})
            response.data.forEach(post => {
              post.nodeRef = createRef(null)
            })
            return response
    }
}