package com.duynguyen.ntkduy.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QBlog is a Querydsl query type for Blog
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QBlog extends EntityPathBase<Blog> {

    private static final long serialVersionUID = 2040539502L;

    public static final QBlog blog = new QBlog("blog");

    public final StringPath category = createString("category");

    public final StringPath content = createString("content");

    public final DateTimePath<java.util.Date> date = createDateTime("date", java.util.Date.class);

    public final StringPath description = createString("description");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath reference = createString("reference");

    public final StringPath summary = createString("summary");

    public final StringPath title = createString("title");

    public QBlog(String variable) {
        super(Blog.class, forVariable(variable));
    }

    public QBlog(Path<? extends Blog> path) {
        super(path.getType(), path.getMetadata());
    }

    public QBlog(PathMetadata metadata) {
        super(Blog.class, metadata);
    }

}

