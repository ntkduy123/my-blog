package com.duynguyen.ntkduy.service;


import com.duynguyen.ntkduy.domain.Blog;
import com.duynguyen.ntkduy.repository.jpa.BlogRepository;
import com.google.common.collect.Lists;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class BlogServiceImpl implements BlogService {

    @Resource
    private BlogRepository blogRepository;

    @Override
    public List<Blog> findAll() {
        return Lists.newArrayList(blogRepository.findAll());
    }
}
