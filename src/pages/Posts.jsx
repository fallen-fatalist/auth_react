
import React, { useState, useEffect, createRef } from 'react';


// API
import PostService from '../api/PostService';
// Components
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/button/MyButton/MyButton';
import Loader from "../components/UI/loader/MyLoader"

// Hooks
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
// Utils
import { getPagesCount } from '../components/utils/pages';
// Styles
import '../styles/App.css';
import Pagination from '../components/UI/pagination/Pagination';


function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  


  // Pagination
  // TODO: Use useMemo hook
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
       const response = await PostService.getAll(limit, page)
       response.data.forEach(post => {
         post.nodeRef = createRef(null)
       })
       setPosts(response.data)
       var totalCount = response.headers['x-total-count']
       if (!totalCount) {
          totalCount = 100
       }
       setTotalPages(getPagesCount(totalCount, limit))
  }, 10000)
    

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

      {postError && <h1>Something went wrong {postError}</h1>}
      {
        isPostsLoading 
        // TODO: move style to CSS module
        ? <div style={{display: "flex", justifyContent: "center", marginTop: 50}}> <Loader loaderText={"Loading posts..."}/></div>
        : <>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts"/>
            <Pagination totalPages={totalPages} page={page} setPage={setPage}/>
          </>
      }
    </div>
  );
}

export default Posts;