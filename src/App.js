import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import BlogLists from "./pages/BlogLists";
import BlogDetails from "./pages/BlogDetails";
import NewBlog from "./pages/NewBlog";
import { addNewBlog, fetchBlogs } from './Services/BlogServices.js';

function MainApp() {
  const [blogs, setBlogs] = useState([]);
  const [shouldLoadBlogs, setShouldLoadBlogs] = useState(false); // Control flag
  const navigate = useNavigate();

  useEffect(() => {
    if (!shouldLoadBlogs) return;

    const loadBlogs = async () => {
      const data = await fetchBlogs(); // Await the promise
      console.log('Fetched Data:', data); // Log the data before setting state
      if (Array.isArray(data)) {
        setBlogs(data);
      } else {
        console.error('Expected data to be an array:', data);
      }
    };
    loadBlogs();
  }, [shouldLoadBlogs]);

  function handleLoadBlogs() {
    setShouldLoadBlogs(true);
  }

  function handleClear() {
    setBlogs([]);
    setShouldLoadBlogs(false);
  }

  // Add blog to the loading blog
  function addBlog(newBlog) {
    addNewBlog(newBlog) //function to send new blog to backend api
    setShouldLoadBlogs(false)
    navigate('/blogs');
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<BlogLists blogs={blogs} handleLoadBlogs={handleLoadBlogs} handleClear={handleClear} />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      <Route path="/new" element={<NewBlog onAddBlog={addBlog} />} />
    </Routes>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
