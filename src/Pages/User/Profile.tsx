import { useEffect, useRef, useState } from "react";
import Navbar from "../../Components/Navbar";
import Reset_password from "../../Components/Reset_password";
import profiler_img from "../../assets/img-23.avif";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../Redux/features/userSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { editProfileValidationSchema } from "../../FormValidation/ProfileValidation";
import axios from "../../Axios/Axios";
import { toast } from "react-toastify";
import { baseURL } from "../../Constants/Constants ";
interface initialValuesType {
  username: string;
  bio: string;
}
const initialValues: initialValuesType = {
  username: "",
  bio: "",
};
interface fromTyep {
  username: string;
  bio: string;
}

const Profile = () => {
  const [showpassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.UserData.userData);

  // console.log("🚀 ~ file: Profile.tsx:27 ~ Profile ~ userData:", userData);

  useEffect(() => {
    if (userData) {
      setUserData({
        username: userData.name,
        email: userData.email,
        bio: userData.bio,
      });
    }
  }, [userData]);
  const handleEditForm = async (value: fromTyep) => {
    try {
      console.log(value);
      const PostEditProfile = await axios.post("/edit-profile-form", value);
      const userGetData = await axios.get("/fetch-user-data");
      console.log(
        "🚀 ~ file: Profile.tsx:42 ~ handleEditForm ~ userGetData:",
        userGetData
      );
      // console.log(Response, "jiji");
    } catch (err) {
      console.error("Error s");
    }
  };
  const inputProfileRef = useRef<HTMLInputElement>(null);

  const handle_Profile_input = async (event: any) => {
    const file = event.target.files[0];
    // console.log("🚀 ~ file: Profile.tsx:60 ~ consthandle_Profile_input= ~ file:", file)

    try {
      const formData = new FormData();
      formData.append("profile", file);
      const response = await axios.post("/upload-profile-photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        toast.success("ok");
      }
      const userDetail = await axios.get("/fetch-user-data");
      dispatch(setUserData(userDetail.data));
    } catch (err) {
      console.log("mistkae in here............", err);
    }

    console.log("Profile image changed");
  };

  const handleEditProfile = () => {
    if (inputProfileRef.current) {
      inputProfileRef.current.click();
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="max-w-3xl w-full p-8 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Profile</h1>
          <div className="flex justify-between items-center mb-4">
            <div className="w-1/2">
              <img src={baseURL + `/${userData.profile}`} alt="Profile" />
            </div>
            <input
              type="file"
              ref={inputProfileRef}
              accept="image/*"
              className="hidden"
              onChange={handle_Profile_input}
            />

            <div className="w-1/2">
              <Formik
                initialValues={{
                  username: userData.name,
                  email: userData.email,
                  bio: userData.bio,
                }}
                validationSchema={editProfileValidationSchema}
                onSubmit={handleEditForm}
              >
                {({ isSubmitting }) => (
                  <Form className="flex flex-col">
                    <div className="mb-4">
                      <Field
                        type="text"
                        name="email"
                        className="px-4 py-2 mb-2 border rounded-md w-full "
                        placeholder="New Username"
                        readOnly
                      />
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Change Username
                      </label>
                      <Field
                        type="text"
                        name="username"
                        className="px-4 py-2 mb-2 border rounded-md w-full"
                        placeholder="New Username"
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                      <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
                        Add Bio
                      </label>
                      <Field
                        type="text"
                        name="bio"
                        className="px-4 py-2 mb-2 border rounded-md w-full"
                        placeholder="Add Bio"
                      />
                      <ErrorMessage
                        name="bio"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              <p onClick={() => setShowPassword(!showpassword)}>Cannage</p>
              {showpassword && <Reset_password />}
            </div>
          </div>

          <button
            className="px-4 py-2 mr-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleEditProfile}
          >
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
