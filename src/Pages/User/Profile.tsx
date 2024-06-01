
import Navbar from "../../Components/Navbar";
import Reset_password from "../../Components/Reset_password";
import profiler_img from '../../assets/img-23.avif'
// import { useState } from "react";

const Profile = () => {
  // const [newUsername, setNewUsername] = useState("");
  // const [oldPassword, setOldPassword] = useState("");
  // const [newPassword, setNewPassword] = useState("");

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="max-w-3xl w-full p-8 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Profile</h1>

          <div className="flex justify-between items-center mb-4">
            <div className="w-1/2">
              <img src={profiler_img} alt="" />
            </div>

            <div className="w-1/2">
              {/* Right side content goes here */}
              <form className="flex flex-col">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Change Username
                  </label>
                  <input
                    type="text"
                    className="px-4 py-2 border rounded-md w-full"
                    placeholder="New Username"
                  />
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                    Submit
                  </button>
                </div>
              </form>
              {/* reset components */}
              <Reset_password />
            </div>
          </div>
          <div className="flex justify-start">
            <button className="px-4 py-2 mr-4 bg-blue-500 text-white rounded hover:bg-blue-600">
              Edit{" "}
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
