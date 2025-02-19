import React, { useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css';

function App() { 
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript 1', body: "Desc"},
    {id: 2, title: 'JavaScript 2', body: "Desc"},
    {id: 3, title: 'JavaScript 3', body: "Desc"},
  ])

  
  return (
    <div className="App">
      <PostList posts={posts} title="Posts list 1"/>
    </div>
  );
}

export default App;
