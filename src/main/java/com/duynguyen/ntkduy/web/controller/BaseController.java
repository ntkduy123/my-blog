package com.duynguyen.ntkduy.web.controller;

import com.duynguyen.ntkduy.domain.ApplicationUser;
import com.duynguyen.ntkduy.domain.Blog;
import com.duynguyen.ntkduy.domain.Customer;
import com.duynguyen.ntkduy.domain.ZaloUser;
import com.duynguyen.ntkduy.repository.jpa.BlogRepository;
import com.duynguyen.ntkduy.repository.jpa.CustomerRepository;
import com.duynguyen.ntkduy.repository.jpa.ZaloUserRepository;
import com.duynguyen.ntkduy.web.ViewResolver;
import com.google.gson.Gson;
import jdk.nashorn.internal.ir.annotations.Ignore;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import static com.duynguyen.ntkduy.security.SecurityConstants.HEADER_STRING;

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
    private ZaloUserRepository zaloUserRepository;

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
    public String signupPage(Model model, HttpServletRequest req, HttpServletResponse res) {
        System.out.println(req.getHeader(HEADER_STRING));
        System.out.println(res.getHeader(HEADER_STRING));
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
    @ResponseBody
    public String test(Model model) {
        Blog blog = blogRepository.findOne(7L);
        model.addAttribute("blog", blog);
        return "admin/blogs/test";
    }

    @RequestMapping(value = "/insert-zalo-user", method = RequestMethod.POST)
    public ResponseEntity insertZaloUser(Model model, @RequestBody String data) throws ParseException {
        System.out.println(data);
        JSONObject jsonData = new Gson().fromJson(data, JSONObject.class);
        SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");

        ZaloUser zaloUser = new ZaloUser();
        zaloUser.setId(Long.valueOf(jsonData.getAsString("id")));
        zaloUser.setName(jsonData.getAsString("name"));
        zaloUser.setGender(jsonData.getAsString("gender"));
        zaloUser.setBirthday(df.parse(jsonData.getAsString("birthday")));
        zaloUserRepository.save(zaloUser);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
