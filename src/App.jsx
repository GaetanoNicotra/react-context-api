import { BrowserRouter, Routes, Route } from "react-router-dom"
import PostsList from "./components/PostsList"
import PostsPage from "./components/PostsPage"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
