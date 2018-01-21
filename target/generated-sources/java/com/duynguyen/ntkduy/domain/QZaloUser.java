package com.duynguyen.ntkduy.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QZaloUser is a Querydsl query type for ZaloUser
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QZaloUser extends EntityPathBase<ZaloUser> {

    private static final long serialVersionUID = 1680080289L;

    public static final QZaloUser zaloUser = new QZaloUser("zaloUser");

    public final DateTimePath<java.util.Date> birthday = createDateTime("birthday", java.util.Date.class);

    public final StringPath gender = createString("gender");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath name = createString("name");

    public final StringPath picture = createString("picture");

    public QZaloUser(String variable) {
        super(ZaloUser.class, forVariable(variable));
    }

    public QZaloUser(Path<? extends ZaloUser> path) {
        super(path.getType(), path.getMetadata());
    }

    public QZaloUser(PathMetadata metadata) {
        super(ZaloUser.class, metadata);
    }

}

