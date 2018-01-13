package com.duynguyen.ntkduy.web;

import org.springframework.ui.Model;

import javax.servlet.http.HttpServletRequest;


public interface ViewResolver {
    String TEMPLATE_NAME = "templateName";
    String ADMIN_LAYOUT = "layout/admin-layout";

    String view(String baseName, HttpServletRequest request, Model model);
}
