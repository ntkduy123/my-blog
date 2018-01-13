package com.duynguyen.ntkduy.repository.jpa;

import com.duynguyen.ntkduy.domain.Customer;
import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer, Long>, QueryDslPredicateExecutor<Customer>
{
}
