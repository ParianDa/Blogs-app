// src/services/BlogServices.js
//dynamic array for storing new blogs which i created
let localBlogs = [];

export async function fetchBlogs() {
    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7d74c671008140ecba8ef26787575aaf');
        const data = await response.json();
        console.log('API Response:', data); // Inspect this log to understand the structure
        if (Array.isArray(data.articles)) {
            return [...localBlogs,...data.articles]
        } else {
            console.error('API response does not contain articles array:', data);
            return localBlogs;
        }
    } catch (error) {
        console.error('Failed to fetch blogs:', error);
        return localBlogs;
    }
}

export function addNewBlog(newBlog) {
    localBlogs.push(newBlog)
}
