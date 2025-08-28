import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlogItem from '../components/BlogItem'

export default function Home() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4545/blog")
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="container mt-5">
      <BlogItem blogs={blogs} setBlogs={setBlogs} />
    </div>
  )
}
