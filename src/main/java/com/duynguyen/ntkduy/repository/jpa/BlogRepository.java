package com.duynguyen.ntkduy.repository.jpa;

import com.duynguyen.ntkduy.domain.Blog;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;

public interface BlogRepository extends CrudRepository<Blog, Long>, QueryDslPredicateExecutor<Blog>
{
}
