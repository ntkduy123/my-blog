package com.duynguyen.ntkduy.repository.jpa;

import com.duynguyen.ntkduy.domain.ApplicationUser;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;

public interface ApplicationUserRepository extends CrudRepository<ApplicationUser, Long>, QueryDslPredicateExecutor<ApplicationUser>
{
    ApplicationUser findByUsername(String username);
}
