import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function AddBlog() {
  const [blogData, setBlogData] = useState({ title: "", description: "" })
  const navigate = useNavigate()

  const onHandleChange = (e) => {
    setBlogData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:4545/blog", blogData)
    navigate("/")
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label fs-5">Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={blogData.title}
                onChange={onHandleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label fs-5">Description</label>
              <textarea
                name="description"
                rows={10}
                className="form-control"
                value={blogData.description}
                onChange={onHandleChange}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
