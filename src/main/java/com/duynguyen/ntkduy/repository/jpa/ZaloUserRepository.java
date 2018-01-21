package com.duynguyen.ntkduy.repository.jpa;

import com.duynguyen.ntkduy.domain.ZaloUser;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;

public interface ZaloUserRepository extends CrudRepository<ZaloUser, Long>, QueryDslPredicateExecutor<ZaloUser>
{
}
