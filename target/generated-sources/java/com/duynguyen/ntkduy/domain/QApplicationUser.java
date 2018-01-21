package com.duynguyen.ntkduy.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QApplicationUser is a Querydsl query type for ApplicationUser
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QApplicationUser extends EntityPathBase<ApplicationUser> {

    private static final long serialVersionUID = -2029949969L;

    public static final QApplicationUser applicationUser = new QApplicationUser("applicationUser");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath password = createString("password");

    public final StringPath username = createString("username");

    public QApplicationUser(String variable) {
        super(ApplicationUser.class, forVariable(variable));
    }

    public QApplicationUser(Path<? extends ApplicationUser> path) {
        super(path.getType(), path.getMetadata());
    }

    public QApplicationUser(PathMetadata metadata) {
        super(ApplicationUser.class, metadata);
    }

}

