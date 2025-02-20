import React, { useState, useMemo } from 'react';


// Components
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
// Styles
import './styles/App.css';


function App() { 
  const [posts, setPosts] = useState([
    {id: 1, title: 'Abba', body: "Some word"},
    {id: 2, title: 'Python', body: "Scripting programming language"},
    {id: 3, title: 'Java', body: "Object oriented programming language"},
  ])

  const [filter, setFilter] = useState({
    sort: "", 
    query: ""
  })

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])


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

      <PostFilter 
        filter={filter} 
        setFilter={setFilter}
      />
      
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts list 1"/>
    </div>
  );
}

export default App;
