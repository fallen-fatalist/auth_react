import React from "react"
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";


// TODO: Endless pagination
const PostList = ({posts, title, remove}) => {
  if (!posts.length) {
    return (
      <h1 style={{textAlign: "center"}}>Posts are not found</h1>
    )
  }
  
  return (
    <div>
      <h1 style={{textAlign: "center"}}>
        {title}
      </h1>
      

      <TransitionGroup> 
        {posts.map((post) => 
          <CSSTransition
            key={post.id}
            nodeRef={post.nodeRef}
            timeout={500}
            classNames="post"
          >
            <div ref={post.nodeRef}>
              <PostItem  remove={remove} post={post}/>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
};

export default PostList;
