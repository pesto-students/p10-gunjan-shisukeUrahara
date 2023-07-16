import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

function BlogPost({ posts }) {
    const { id } = useParams();
    // const [post, setPost] = useState(null);

    const post = posts.find((post) => post.id === parseInt(id));


    // useEffect(() => {
    //     // Fetch the post with the given id from your data source here
    //     // For now, I'll use a static post
    //     const fetchedPost = { id: 1, title: 'Blog Post 1', content: 'This is the content of blog post 1', date: '2023-07-16', image: 'path/to/image' };
    //     setPost(fetchedPost);
    // }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div className="blog-post">
            <img src={post.image} alt={post.title} />
            <h1>{post.title}</h1>
            <p>{post.date}</p>
            <p>{post.content}</p>
        </div>
    );
}

export default BlogPost;
