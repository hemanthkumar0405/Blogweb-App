# Blog App — React + Spring Boot + MySQL Blog Platform

A full-stack Blog Application built with Spring Boot (Java) and MySQL for the backend, and optionally React.js for the frontend. The app allows users to create, update, delete, and read blog posts with secure authentication.

## ✨ Features
- Create, read, update, delete (CRUD) blog posts
- Role‑aware access (e.g., only authors can edit/delete their posts)
- RESTful APIs with JSON
- Responsive React UI
- MySQL persistence

## 🧱 Tech Stack
- Backend: Java, Spring Boot, Spring Data JPA, Hibernate
- Database: MySQL
- Frontend: React.js, Axios, React Router
- Tools: Maven, Postman, STS4, GitHub)

## 📁 Project Structure
- Frontend path: `./BLOG-APP/my-blog-app`
- Backend path: `./BLOG-APP/blog`

## 📚 Example API Endpoints
| Method | Endpoint            | Description           |
|--------|---------------------|-----------------------|
| GET    | /blog               | List all posts        |
| GET    | /blog/{id}          | Get post by ID        |
| POST   | /blog               | Create a new post     |
| PUT    | /blog/{id}          | Update a post         |
| DELETE | /blog/{id}          | Delete a post         |

Happy building! ✨
