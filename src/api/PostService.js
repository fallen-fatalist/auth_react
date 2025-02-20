import axios from "axios";
import createRef from "react";
export default class PostService {
    static async getAll() {
        try {
            const response = await axios.get('https://jsonplaceholder.org/posts')
            response.data.forEach(post => {
              post.nodeRef = createRef(null)
            })
            return response.data
        } catch (e) {
            console.log(e);

        }
        return []
    }
}