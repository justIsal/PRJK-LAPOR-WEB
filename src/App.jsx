import React from "react"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import {router} from "./router"
import { store } from "./redux/store";
import { Provider } from "react-redux";
const routes = createBrowserRouter(router);

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default App
