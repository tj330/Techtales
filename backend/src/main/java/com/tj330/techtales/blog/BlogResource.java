package com.tj330.techtales.blog;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BlogResource {
    BlogRepository blogRepository;

    public BlogResource(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    @GetMapping("helloworld")
    public String helloworld() {
        return "Hello World!!";
    }

    @CrossOrigin(origins = "https://techtales-blogs.vercel.app")
    @GetMapping("blogs")
    public List<Blog> retrieveBlogs() {
        return blogRepository.findAll();
    }

    @CrossOrigin(origins = "https://techtales-blogs.vercel.app")
    @GetMapping("blogs/{id}")
    public Optional<Blog> retrieveBlog(@PathVariable Integer id) {
        return blogRepository.findById(id);
    }

    @PostMapping("blogs")
    public Blog newBlog(@RequestBody Blog blog) {
        return blogRepository.save(blog);
    }

    @PutMapping("blogs/{id}")
    public void updateBlog(@PathVariable Integer id, @RequestBody Blog blog) {
        blogRepository.updateById(id, blog.getTopic(), blog.getContent());
    }

    @DeleteMapping("blogs/{id}")
    public void deleteBlogById(@PathVariable Integer id) {
        blogRepository.deleteById(id);
    }
}
