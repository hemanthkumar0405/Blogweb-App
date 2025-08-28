import React from 'react'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import axios from 'axios'

export default function BlogItem({ blogs, setBlogs }) {
  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:4545/blog/${id}`)
      setBlogs(prev => prev.filter(b => b.id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  return (
  <>
    {blogs.length === 0 ? (
      <div className="text-center mt-5">
        <h4>No blogs available</h4>
      </div>
    ) : (
      blogs.map((blog) => (
        <div key={blog.id} className="card shadow p-3 mb-5 rounded border-0">
          <div className="card-body">
            <h5 className="card-title ms-3">{blog.title}</h5>
            <p className="card-text ms-3">
              <Markdown>{blog.description}</Markdown>
            </p>
            <Link
              to={`/blogView/${blog.id}`}
              className="btn btn-link text-decoration-none"
            >
              View More
            </Link>
            <br />
            <button
              onClick={() => deleteBlog(blog.id)}
              className="btn btn-danger ms-3 mt-3"
            >
              Delete
            </button>
          </div>
        </div>
      ))
    )}
  </>
)

}
