import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Markdown from 'react-markdown'
import axios from 'axios'

export default function BlogDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:4545/blog/${id}`)
      .then(res => setBlog(res.data))
      .catch(err => console.error(err))
  }, [id])

  if (!blog) return <p className="text-center mt-5">Loading...</p>

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2>{blog.title}</h2>
          <h5>{blog.date}</h5>
          <button
            onClick={() => navigate(`/editBlog/${blog.id}`)}
            className="btn btn-success mt-2 fs-6"
          >
            Edit
          </button>
          <div className="mt-4 border p-3">
            <Markdown>{blog.description}</Markdown>
          </div>
        </div>
      </div>
    </div>
  )
}
