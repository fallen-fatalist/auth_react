import React, {useState, createRef} from "react"
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
  const [post, setPost] = useState({
    id: '',
    title: '',
    body: '',
    nodeRef: createRef(null)
  })

  const addNewPost = (e) => {
    e.preventDefault()
    
    // Add some unique ID based on time
    post.id = Date.now()

    if (post.title === '' || post.body === '') {
      // Here must be the modal window with the warning of empty fields
      return
    }

    create(post)
    setPost({
      id: '',
      title: '',
      body: '',
      nodeRef: createRef(null)
    })
  }


  return (
      <form>
        <MyInput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text" 
          placeholder="Post Title"
        />

        
        <MyInput 
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text" 
          placeholder="Post Description"
        />

        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
  )
};

export default PostForm;
