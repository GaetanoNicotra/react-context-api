import { BrowserRouter, Routes, Route } from "react-router-dom"
import PostsList from "./components/PostsList"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostsList />}>  </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
