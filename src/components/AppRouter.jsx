import React from "react"
import {
  Routes,
  Route,
} from 'react-router-dom'

import { routes } from "../router"


const AppRouter = (props) => {
  return (
        <Routes>
          {routes.map(route => 
            <Route 
              path={route.path}
              element={<route.page/>}
              exact={route.exact}
            />
          )}
        </Routes>
      
  )
};

export default AppRouter;
