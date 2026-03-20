import React, { useEffect, useState } from "react";

const FetchApi1 = () => {
  let [userdata, setUserData] = useState([]);
  const [search, setSearch] = useState("");

  let fetchData = async () => {
    try {
      let data = await fetch("https://api.github.com/users");
      let userData = await data.json();
      setUserData(userData);
      console.log(userData);
    } catch {
      console.log("Error While fetching the data:");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredUsers = userdata.filter((user) =>
    user.login.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        GitHub Users
      </h1>

      {/* 🔎 Search Bar */}
      <div className="max-w-md mx-auto mb-8 flex">
        <input
          type="text"
          placeholder="Search GitHub user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
        />
            <h1>{filteredUsers.length}</h1>
      </div>

      {/* 🧑 Users Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-5 text-center"
            >
              {/* Avatar */}
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded-full mx-auto border-4 border-gray-200"
              />

              {/* Username */}
              <h2 className="mt-3 text-lg font-semibold text-gray-800">
                {user.login}
              </h2>

              {/* Type Badge */}
              <span
                className={`inline-block mt-2 px-3 py-1 text-xs rounded-full 
                ${
                  user.type === "User"
                    ? "bg-green-100 text-green-700"
                    : "bg-purple-100 text-purple-700"
                }`}
              >
                {user.type}
              </span>

              {/* Buttons */}
              <div className="mt-4 flex justify-center gap-2">
                <a
                  href={user.html_url}
                  target="_blank"
                  className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700"
                >
                  Profile
                </a>

                <a
                  href={`https://github.com/${user.login}?tab=repositories`}
                  target="_blank"
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm hover:bg-gray-300"
                >
                  Repos
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No users found 😢
          </p>
        )}
      </div>
    </div>
  );
};

export default FetchApi1;
