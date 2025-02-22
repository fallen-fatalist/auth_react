import React from "react"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import Loader from "../components/UI/loader/MyLoader";

import { useFetching } from "../hooks/useFetching";
import PostService from "../api/PostService";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, postError] = useFetching(async (id) => {
        const response = await PostService.getPostById(id)
        setPost(response.data)
    }, 10000)

    const [fetchCommentsById, isCommentsLoading, commentError] = useFetching( async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    
    }, 10000)

    useEffect( () => {
        fetchPostById(params.id)
        fetchCommentsById(params.id)
    }, [])

    
    return (
        <div>
            {isLoading
                ? <Loader message="Loading post"/>    
                : <>
                    <h2>Post:</h2>
                    <h3>{post.id}. {post.title}</h3>
                    <div>{post.body}</div>
                </>
            }

            <hr style={{margin: 15}}/>

            {isCommentsLoading
                ? <Loader message="Loading comments"/>    
                : <>
                    <h3>Commentaries:</h3>
                    {comments.map(comm =>
                        <div className="commentary" key={comm.id}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )

                    }
                </>


            }
        </div>
    )
};

export default PostIdPage;
