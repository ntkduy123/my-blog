package com.duynguyen.ntkduy.web.api;

import com.duynguyen.ntkduy.domain.Blog;
import com.duynguyen.ntkduy.repository.jpa.BlogRepository;
import com.duynguyen.ntkduy.service.BlogService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/1/blog")
public class BlogController {

    @Resource
    private BlogService blogService;

    @RequestMapping(value = "/articles", method = RequestMethod.GET)
    @ResponseBody
    public List<Blog> getArticles() {
        return blogService.findAll();
    }
}
