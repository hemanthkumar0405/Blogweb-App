import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Home from './pages/Home'
import AddBlog from './pages/AddBlog'
import BlogDetails from './pages/BlogDetails'
import EditBlog from './pages/EditBlog'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="blogView/:id" element={<BlogDetails />} />
          <Route path="editBlog/:id" element={<EditBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
