import React, { useState } from "react";

const NewBlogForm = ({addBlog}) => {
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault()

        const newBlog = {
            title,
            author,
            description
        }

        addBlog(newBlog) // define the props in NewBlog Componenet
        setTitle("")
        setAuthor("")
        setDescription("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>New Blog Form</h2>
            <div>
                <label>Title</label>
                <input onChange={(e) => setTitle(e.target.value)} name="title" value={title} required/>
            </div>

            <div>
                <label>Author</label>
                <input onChange={(e) => setAuthor(e.target.value)} name="author" value={author} required/>
            </div>

            <div>
                <label>Description</label>
                <textarea onChange={(e) => setDescription(e.target.value)} name="description" value={description} required/>
            </div>
            <button type="submit">Add Blog</button>
        </form>
    )
}

export default NewBlogForm