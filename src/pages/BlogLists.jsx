import React, { useEffect, useState } from 'react';
import './BlogLists.css'; // Import CSS file
import { useNavigate } from 'react-router-dom';

const BlogLists = ({blogs, handleClear, handleLoadBlogs}) => {
    const navigate = useNavigate();

    function handleBack() {
        navigate('/')
    }
    

    return (
        <div className="container"> {/* Centering container */}
            <button onClick={handleLoadBlogs}>Load Blogs</button> {/* Apply CSS class */}
            <button onClick={handleClear}>Clear Blogs</button>
            <button onClick={handleBack}>Back To home</button>
            <div>
                {blogs.map((blog, index) => (
                    <div key={index} className="blog-card"> {/* Apply CSS class */}
                        <h2>{blog.title}</h2>
                        <p><strong>Author:</strong> {blog.author}</p>
                        <p>{blog.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogLists;
