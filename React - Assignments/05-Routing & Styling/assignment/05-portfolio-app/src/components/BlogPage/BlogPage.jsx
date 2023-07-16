import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';

function BlogPage({ posts }) {

    return (
        <div className="blog">
            <h1>Blogs</h1>
            <div className="blog-posts">
                {posts.map(post => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="blog-post-card">
                        <img src={post.image} alt={post.title} />
                        <h2>{post.title}</h2>
                        <p>{post.preview}</p>
                        <p>{post.date}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default BlogPage;
