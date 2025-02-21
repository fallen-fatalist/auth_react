import React, { useState, useEffect } from 'react';


// Components
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton/MyButton';
import Loader from "./components/UI/loader/MyLoader"

// Hooks
import { usePosts } from './components/hooks/usePosts';
// Styles
import './styles/App.css';
import PostService from './api/PostService';
import { useFetching } from './components/hooks/useFetching';
import { getPagesCount, getPagesArray } from './components/utils/pages';


function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  


  // Pagination
  // TODO: Use useMemo hook
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  let pagesArray = getPagesArray(totalPages)
  const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
       const response = await PostService.getAll(limit, page)
       setPosts(response.data)
       const totalCount = response.headers['x-total-count']
       setTotalPages(getPagesCount(totalCount, limit))
  })
    

  useEffect( () => {
    fetchPosts()
  },[page])



  // Callback for creating the post
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  // Callback for removing the post
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
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

      {postError && <h1>Something went wrong ${postError}</h1>}
      {
        isPostsLoading 
        ? <div style={{display: "flex", justifyContent: "center", marginTop: 50}}> <Loader/></div>
        : <>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts"/>
            <div className="page__wrapper">
              {pagesArray.map(p =>  
                <span 
                  onClick={() => setPage(p)}
                  key={p}  
                  className={page === p ? "page page__current" : "page"}
                >
                  {p}
                </span>
              )}
            </div>
          </>
      }
    </div>
  );
}

export default App;
