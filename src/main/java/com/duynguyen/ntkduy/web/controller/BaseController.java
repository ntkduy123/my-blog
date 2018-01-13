package com.duynguyen.ntkduy.web.controller;

import com.duynguyen.ntkduy.domain.Blog;
import com.duynguyen.ntkduy.domain.Customer;
import com.duynguyen.ntkduy.repository.jpa.BlogRepository;
import com.duynguyen.ntkduy.repository.jpa.CustomerRepository;
import com.duynguyen.ntkduy.web.ViewResolver;
import jdk.nashorn.internal.ir.annotations.Ignore;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@Controller
public class BaseController {

    @Value("${project.static-url}")
    protected String staticURL;

    @ModelAttribute("staticURL")
    public String getStaticURL() {
        return staticURL;
    }

    @Resource
    private CustomerRepository customerRepository;

    @Resource
    private BlogRepository blogRepository;

    @RequestMapping(value = "/*", method = RequestMethod.GET)
    public String home(Model model) {
        model.addAttribute("templateName", "blog/blog");
        return "layout/aui-layout";
    }

    @RequestMapping(value = "/signin-page", method = RequestMethod.GET)
    public String signinPage(Model model) {
        model.addAttribute("templateName", "authentication/signin");
        return "authentication/layout";
    }

    @RequestMapping(value = "/signup-page", method = RequestMethod.GET)
    public String signupPage(Model model) {
        model.addAttribute("templateName", "authentication/signup");
        return "authentication/layout";
    }

    @RequestMapping(value = "/insert-blog-page", method = RequestMethod.GET)
    public String insertBlogPage(Model model, HttpServletRequest request) {
        model.addAttribute("templateName", "admin/blogs/insert-blog");
        return "layout/admin-layout";
    }

    @RequestMapping(value = "/insert-blog", method = RequestMethod.POST)
    public String insertBlog(Model model, @ModelAttribute Blog blog) {
        blogRepository.save(blog);
        model.addAttribute("templateName", "admin/blogs/insert-blog");
        return "layout/admin-layout";
    }

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String test(Model model) {
        Blog blog = blogRepository.findOne(7L);
        model.addAttribute("blog", blog);
        return "admin/blogs/test";
    }

}
