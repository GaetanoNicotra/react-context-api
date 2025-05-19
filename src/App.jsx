import { BrowserRouter, Routes, Route } from "react-router-dom"
import PostsPage from "./components/PostsPage"
import PostsContext from "./contexts/PostsContext"
function App() {


  return (
    <>
      <PostsContext.Provider value={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PostsPage />}></Route>
          </Routes>
        </BrowserRouter>
      </PostsContext.Provider>
    </>
  )
}

export default App
