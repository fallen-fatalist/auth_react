import React from "react"
import { useParams } from 'react-router-dom'

const PostIdPage = () => {
    const params = useParams()

  return (
    <div>
      <h1>Post with id: {params.id}</h1>
    </div>
  )
};

export default PostIdPage;
