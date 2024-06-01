import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/User/SignUp";
import Home from "./Pages/User/Home";
import axios from "./Axios/Axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setUserData } from "./Redux/features/userSlice";
import Profile from "./Pages/User/Profile";
//*default access the cookies
axios.defaults.withCredentials = true;

function App() {
  const disptach = useDispatch();
  const userData = useSelector((state: any) => state.UserData.userData);

  useEffect(() => {
    const fetch = async () => {
      try {
        const userDetails = await axios.get("/fetch-user-data");
        // console.log(
        //   "🚀 ~ file: App.tsx:21 ~ fetch ~ userDetails:",
        //   userDetails
        // );
        disptach(setUserData(userDetails.data));
      } catch (err) {
        console.error("Error showing user data not responsing", err);
      }
    };
    fetch();
  }, [disptach]);
  // console.log("🚀 ~ file: App.tsx:17 ~ App ~ userData:", userData)

  return (
    <>
      <ToastContainer theme="dark" />
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              userData ? (
                <SignIn />
              ) : userData?.role === "User" ? (
                <Navigate to="/home" />
              ) : (
                <Navigate to="/signup" />
              )
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
