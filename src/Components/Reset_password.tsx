import React from 'react'

const Reset_password = () => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Change Password
      </label>
      <input
        type="password"
        className="px-4 py-2 border rounded-md w-full mb-2"
        placeholder="Old Password"
      />
      <input
        type="password"
        className="px-4 py-2 border rounded-md w-full mb-2"
        placeholder="New Password"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </div>
  );
}

export default Reset_password