# My Blog App — React + Spring Boot + MySQL Blog Platform

A full‑stack Blog application built with **Spring Boot, React, MySQL**. It supports user authentication (JWT), creating/editing/deleting blog posts, and viewing lists of posts with details.

## ✨ Features
- Create, read, update, delete (CRUD) blog posts
- Role‑aware access (e.g., only authors can edit/delete their posts)
- RESTful APIs with JSON
- Responsive React UI
- MySQL persistence

## 🧱 Tech Stack
- Backend: Spring Boot (Maven)  
- Frontend: React (Vite)
- Database: MySQL
- Auth: JWT (JSON Web Tokens)

## 📁 Project Structure
- Frontend path: `./BLOG-APP/my-blog-app`
- Backend path: `./BLOG-APP/blog`

## 🚀 Getting Started (Local)

### Prerequisites
- **Java 21**
- **Maven 3.8+**
- **Node.js LTS** (v18+ recommended) & npm
- **MySQL 8+**

## 📚 Example API Endpoints
| Method | Endpoint             | Description           |
|--------|----------------------|-----------------------|
| POST   | /api/auth/signup     | Register a new user   |
| POST   | /api/auth/login      | Authenticate user     |
| GET    | /api/posts           | List all posts        |
| GET    | /api/posts/{id}      | Get post by ID        |
| POST   | /api/posts           | Create a new post     |
| PUT    | /api/posts/{id}      | Update a post         |
| DELETE | /api/posts/{id}      | Delete a post         |

> Tip: Import your API collection in Postman and test endpoints with/without JWT.

Happy building! ✨
