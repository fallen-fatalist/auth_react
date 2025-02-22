import React from "react"
import MyButton from "./UI/button/MyButton/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = ({post, body, remove}) => {
  const navigate = useNavigate();
  
  return (
    <div className="post">
      <div className="post__content">
        <strong>{post.id}. {post.title}</strong>
        <div>
          {post.body}
        </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Open post</MyButton>
        <MyButton onClick={() => remove(post)}>Delete post</MyButton>
      </div>
    </div>
  )
};

export default PostItem;
