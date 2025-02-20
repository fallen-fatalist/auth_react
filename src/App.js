import React, { useState, useEffect, createRef } from 'react';
import axios from 'axios';


// Components
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';

// Hooks
import { usePosts } from './components/hooks/usePosts';
// Styles
import './styles/App.css';


function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect( () => {
    fetchPosts()
  },[])

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.org/posts')
    response.data.forEach(post => {
      post.nodeRef = createRef(null)
    });
    setPosts(response.data)
  }


  // Callback for creating the post
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  // Callback for removing the post
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Create new post
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}> 
        <PostForm create={createPost}/>
      </MyModal>

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
