import React, { useEffect, useState } from "react";

const FetchApi = () => {
  let [data, setData] = useState([]);

  let fetchUserData = async () => {
    try {
      let userData = await fetch("https://jsonplaceholder.typicode.com/users");
      console.log(userData);
      let data = await userData.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log("Error While fetching the data:");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        User Directory
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            {/* Avatar */}
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-600 text-white text-xl font-bold mx-auto">
              {user.name.charAt(0)}
            </div>

            {/* Name */}
            <h2 className="text-xl font-semibold text-center mt-3">
              {user.name}
            </h2>

            <p className="text-center text-gray-500 text-sm">
              @{user.username}
            </p>

            {/* Contact */}
            <div className="mt-4 space-y-1 text-sm text-gray-700">
              <p>
                <span className="font-medium">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-medium">Phone:</span> {user.phone}
              </p>

              <p>
                <span className="font-medium">Website:</span>{" "}
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  {user.website}
                </a>
              </p>
            </div>

            {/* Address */}
            <div className="mt-4 p-3 bg-indigo-50 rounded-lg text-sm">
              <h4 className="font-semibold mb-1">Address</h4>
              <p>
                {user.address.street}, {user.address.suite}
              </p>
              <p>
                {user.address.city} - {user.address.zipcode}
              </p>
            </div>

            {/* Company */}
            <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm">
              <h4 className="font-semibold mb-1">Company</h4>
              <p className="font-medium">{user.company.name}</p>
              <p className="italic text-gray-600">{user.company.catchPhrase}</p>
            </div>
          </div>
        ))}
      </div>
    </div>  
  );
};

export default FetchApi;
