import React from "react"
import {
  Routes,
  Route,
} from 'react-router-dom'

import Main from "../pages/Main";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = (props) => {
  return (
        <Routes>
            <Route 
              path="/"
              element={<Main/>}
            />

            <Route 
              path="/about"
              element={<About/>}
            />

            <Route
              exact 
              path="/posts"
              element={<Posts/>}
            />

            <Route 
              path="/posts/:id"
              element={<PostIdPage/>}
            />

            <Route 
              path="*" 
              element={<Error message="Page not found"/> }
            />
        </Routes>
      
  )
};

export default AppRouter;
