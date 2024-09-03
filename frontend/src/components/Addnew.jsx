import React, { useState } from "react";
import axios from "axios";

export default function AddNew({ onClose }) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request using Axios
      const response = await axios.post("http://localhost:3000/admin/add", {
        name,
      });
      console.log("Response:", response.data);
      alert("Name added successfully!");
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error("Error adding name:", error);
      alert("Error adding name. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-700 hover:text-gray-900"
        >
          &times;
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
