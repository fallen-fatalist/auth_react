import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './styles/App.css';


function App() { 
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript 1', body: "Desc"},
    {id: 2, title: 'JavaScript 2', body: "Desc"},
    {id: 3, title: 'JavaScript 3', body: "Desc"},
  ])

  // Callback for creating the post
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // Callback for removing the post
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  
  return (
    <div className="App">
      <PostForm create={createPost}/>
   
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title="Posts list 1"/>
        : <h1 style={{textAlign: "center"}}>Posts are not found</h1>
      }
    </div>
  );
}

export default App;
