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

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [newBlog, setNewBlog] = useState({ title: "", description: "" }); // Form state

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  // Handle form submission
  const handleCreateBlog = (e) => {
    e.preventDefault();
    if (newBlog.title && newBlog.description) {
      setBlogs([
        ...blogs,
        {
          id: Date.now(),
          title: newBlog.title,
          description: newBlog.description,
        },
      ]);
      setNewBlog({ title: "", description: "" }); // Reset form
      setIsModalOpen(false); // Close modal
    }
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800">My Blogs</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Create Blog
          </button>
        </div>

        {/* Blog Grid */}
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

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Create New Blog
              </h2>
              <form onSubmit={handleCreateBlog} className="space-y-4">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newBlog.title}
                    onChange={handleInputChange}
                    className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    value={newBlog.description}
                    onChange={handleInputChange}
                    className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-300 text-gray-800 text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
