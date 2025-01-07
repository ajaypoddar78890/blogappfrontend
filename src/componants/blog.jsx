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
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800">
          My Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 flex flex-col h-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {blog.title}
                </h2>
                <p className="text-gray-600 flex-grow mb-6">
                  {blog.description}
                </p>
                <div className="flex gap-2">
                  <button className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="bg-orange-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-orange-800 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
