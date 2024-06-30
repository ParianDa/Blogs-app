import React from 'react'
import NewBlogForm from '../forms/NewBlogForm'

const NewBlog = ({onAddBlog}) => {

  function addBlog(newBlog) {
    console.log("Adding new Blog",newBlog)

    onAddBlog(newBlog)
  }

  return (
    <div>
      <NewBlogForm addBlog={addBlog}/>
    </div>
  )
}

export default NewBlog