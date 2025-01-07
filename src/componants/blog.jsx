import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBlog, setNewBlog] = useState({ title: "", description: "" });

  // Fetch blogs from the API
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/task/gettasks"
        );
        setBlogs(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleCreateBlog = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/task/createtasks",
        newBlog
      );
      setBlogs([...blogs, response.data]); // Add the new blog to the list
      setIsModalOpen(false); // Close the modal
      setNewBlog({ title: "", description: "" }); // Reset the form
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
    // Add API delete functionality if needed
  };

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-lg text-red-600 font-semibold">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800">My Blogs</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Create Blog
          </button>
        </div>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Create Blog
            </h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={newBlog.title}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Enter blog title"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={newBlog.description}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                rows="4"
                placeholder="Enter blog description"
              ></textarea>
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateBlog}
                className="bg-green-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
