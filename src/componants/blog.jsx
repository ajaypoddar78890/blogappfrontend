import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    description: "",
    id: null,
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/task/gettasks"
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const handleModalOpen = (blog = { title: "", description: "", id: null }) => {
    setModalData(blog);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalData({ title: "", description: "", id: null });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModalData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      if (modalData.id) {
        // Update existing blog
        await axios.put(
          `http://localhost:8080/api/task/update/${modalData.id}`,
          {
            title: modalData.title,
            description: modalData.description,
          }
        );
        setBlogs((prevBlogs) =>
          prevBlogs.map((blog) =>
            blog._id === modalData.id ? { ...blog, ...modalData } : blog
          )
        );
      } else {
        // Create new blog
        const response = await axios.post(
          "http://localhost:8080/api/task/createtasks",
          {
            title: modalData.title,
            description: modalData.description,
          }
        );
        setBlogs((prevBlogs) => [...prevBlogs, response.data]);
      }
      handleModalClose();
    } catch (error) {
      console.error("Error saving blog:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/task/delete/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting the blog:", error);
    }
  };

  return (
    <div className="bg-gradient-to-b from-green-50 to-green-100 min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800">
          My Blogs
        </h1>
        <button
          onClick={() => handleModalOpen()}
          className="bg-green-500 text-white font-medium py-2 px-4 rounded-lg mb-8 hover:bg-green-600 transition duration-300"
        >
          Create Blog
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
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
                  <button
                    onClick={() => handleModalOpen({ ...blog, id: blog._id })}
                    className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <h2 className="text-2xl font-bold mb-4">
              {modalData.id ? "Edit Blog" : "Create Blog"}
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={modalData.title}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={modalData.description}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200"
                rows="4"
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleModalClose}
                className="bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
