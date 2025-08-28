import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function EditBlog() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [blogData, setBlogData] = useState({ title: "", description: "" })

  useEffect(() => {
    axios.get(`http://localhost:4545/blog/${id}`)
      .then(res => setBlogData(res.data))
      .catch(err => console.error(err))
  }, [id])

  const onHandleChange = (e) => {
    setBlogData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:4545/blog/${id}`, blogData)
    navigate("/")
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
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
              <label htmlFor="description" className="form-label">Description</label>
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
              <button type="submit" className="btn btn-success">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
