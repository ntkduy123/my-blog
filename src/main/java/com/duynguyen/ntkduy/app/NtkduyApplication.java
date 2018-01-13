package com.duynguyen.ntkduy.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
@ComponentScan(basePackages = "com.duynguyen.ntkduy")
@EntityScan(basePackages = "com.duynguyen.ntkduy.domain")
@EnableJpaRepositories(basePackages = "com.duynguyen.ntkduy.repository.jpa")
@EnableAutoConfiguration
public class NtkduyApplication {

    @Bean
    WebMvcConfigurer configurer () {
        return new WebMvcConfigurerAdapter() {

            @Override
            public void addResourceHandlers (ResourceHandlerRegistry registry) {
                registry.addResourceHandler("/public/fonts/**").addResourceLocations("classpath:/static/js/react/public/fonts/");
                registry.addResourceHandler("/public/images/**").addResourceLocations("classpath:/static/js/react/public/images/");
            }
        };
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    public static void main(String[] args) {
        new SpringApplication(NtkduyApplication.class).run(args);
    }

}
