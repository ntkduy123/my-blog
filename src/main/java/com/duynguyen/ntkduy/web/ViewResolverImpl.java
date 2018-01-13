package com.duynguyen.ntkduy.web;

import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import javax.servlet.http.HttpServletRequest;

@Component
public class ViewResolverImpl implements ViewResolver {

    @Override
    public String view(String baseName, HttpServletRequest request, Model model) {
        model.addAttribute(TEMPLATE_NAME, baseName);
        return ADMIN_LAYOUT;
    }
}
