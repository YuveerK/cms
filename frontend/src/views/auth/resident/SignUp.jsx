import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../../components/Loading";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const apiUrl = import.meta.env.VITE_BASE_URL; // Assuming this is your API base URL

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Reset error message
    setError("");

    // Basic validation
    if (!firstName || !lastName || !id || !email || !password || !role) {
      setError("Please fill in all fields.");
      return;
    }

    // Handle form submission
    const formData = {
      first_name: firstName,
      last_name: lastName,
      id_number: id,
      email,
      password,
      role,
    };
    console.log(formData);

    try {
      setLoading(true);
      const response = await axios.post(
        `${apiUrl}/residents/create-user`,
        formData
      );
      console.log(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
            {error && <div className="mb-4 text-red-600">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="id"
                >
                  ID
                </label>
                <input
                  type="text"
                  id="id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your ID"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-6">
                <span className="block text-gray-700 text-sm font-bold mb-2">
                  Role
                </span>
                <div className="flex items-center mb-4">
                  <input
                    type="radio"
                    id="owner"
                    name="role"
                    value="Owner"
                    checked={role === "Owner"}
                    onChange={handleRoleChange}
                    className="mr-2 leading-tight"
                  />
                  <label className="text-gray-700" htmlFor="owner">
                    Owner
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="tenant"
                    name="role"
                    value="Tenant"
                    checked={role === "Tenant"}
                    onChange={handleRoleChange}
                    className="mr-2 leading-tight"
                  />
                  <label className="text-gray-700" htmlFor="tenant">
                    Tenant
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                >
                  Sign Up
                </button>
                <Link
                  to={"/"}
                  className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-600"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
