import React, { useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "The Importance of React Hooks",
      description:
        "React Hooks revolutionized functional components, making state management and side effects much easier.",
    },
    {
      id: 2,
      title: "Introduction to Tailwind CSS",
      description:
        "Tailwind CSS is a utility-first CSS framework that allows for rapid UI development.",
    },
    {
      id: 3,
      title: "Building a RESTful API with Node.js and Express",
      description:
        "Learn how to create a robust backend API using Node.js and the Express framework.",
    },
  ]);

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">My Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                {blog.title}
              </h2>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <div className="flex justify-end space-x-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
