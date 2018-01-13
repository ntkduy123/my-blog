package com.duynguyen.ntkduy.web.controller;


import com.duynguyen.ntkduy.domain.ApplicationUser;
import com.duynguyen.ntkduy.repository.jpa.ApplicationUserRepository;
import com.google.gson.Gson;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@RequestMapping("/users")
public class ApplicationUserController {


    @Resource
    private ApplicationUserRepository applicationUserRepository;

    @Resource
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @RequestMapping(value = "/sign-up", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity signUp(@RequestBody String data) {
        ApplicationUser applicationUser = new Gson().fromJson(data, ApplicationUser.class);
        applicationUser.setPassword(bCryptPasswordEncoder.encode(applicationUser.getPassword()));
        applicationUserRepository.save(applicationUser);
        return ResponseEntity.ok(applicationUser);
    }
}
