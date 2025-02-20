import React, { useState, useMemo, createRef } from 'react';


// Components
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
// Styles
import './styles/App.css';


function App() {
  // Initial data 
  const [posts, setPosts] = useState([
    {id: 1, title: 'Abba', body: "Some word", nodeRef: createRef(null)},
    {id: 2, title: 'Python', body: "Scripting programming language", nodeRef: createRef(null)},
    {id: 3, title: 'Java', body: "Object oriented programming language", nodeRef: createRef(null)},
  ])

  // Filtering
  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)

  // Memo Hooks
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
