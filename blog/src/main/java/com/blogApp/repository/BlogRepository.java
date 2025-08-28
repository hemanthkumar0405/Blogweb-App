package com.blogApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blogApp.entity.Blog;

public interface BlogRepository extends JpaRepository<Blog, Integer> {

}
