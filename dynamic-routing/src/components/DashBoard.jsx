import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/users");
      const data = await response.json();

      // If API returns array directly
      setUserData(data);

      // If API returns { users: [...] }
      // setUserData(data.users);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserDetails = (user) => {
    navigate(`/user-details/${user.name}/${user.id}`, {
      state: user,
    });
  };

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-8">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        User List
      </h1>

      {/* Grid */}
      <main className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {userData.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center hover:shadow-xl transition"
          >
            
            {/* Avatar */}
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-gray-200"
            />

            {/* Name */}
            <h2 className="text-lg font-semibold text-gray-700 mb-1">
              {user.name}
            </h2>

            {/* Role */}
            <p className="text-sm text-gray-500 capitalize mb-3">
              {user.role}
            </p>

            {/* Button */}
            <button
              onClick={() => handleUserDetails(user)}
              className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </main>
    </section>
  );
};

export default DashBoard;
