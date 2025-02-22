import React, { useContext } from "react"
import {
  Routes,
  Route
} from 'react-router-dom'

import { privateRoutes, publicRoutes } from "../router"
import { AuthContext } from "../context/contextIndex";


const AppRouter = (props) => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  return (
        <Routes>
          {isAuth
            ? 
              privateRoutes.map(route => 
                <Route 
                  path={route.path}
                  element={<route.page/>}
                  exact={route.exact}
                  key={route.path}
                />
              )
            :
              publicRoutes.map(route => 
                <Route 
                  path={route.path}
                  element={<route.page/>}
                  exact={route.exact}
                  key={route.path}
                />
              )
          }
        </Routes>

  )
};

export default AppRouter;
