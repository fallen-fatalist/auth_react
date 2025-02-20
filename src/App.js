import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';


function App() { 
  const [posts, setPosts] = useState([
    {id: 1, title: 'Abba', body: "Some word"},
    {id: 2, title: 'Python', body: "Scripting programming language"},
    {id: 3, title: 'Java', body: "Object oriented programming language"},
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const sortPosts = (sort) => {
    setSelectedSort(sort)

    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

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

      <hr style={{margin: "15px 0"}}/>

      <div>
        <MySelect 
          value={selectedSort}
          onChange={sort => sortPosts(sort)}
          defaultValue={"Sort by"} 
          options= {[
            {value: "title", name: "By name"},
            {value: "body", name: "By description"}
          ]}
        />
      </div>

      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title="Posts list 1"/>
        : <h1 style={{textAlign: "center"}}>Posts are not found</h1>
      }
    </div>
  );
}

export default App;
