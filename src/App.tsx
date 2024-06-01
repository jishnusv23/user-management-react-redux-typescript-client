import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/User/SignUp";
import Home from "./Pages/User/Home";
import axios from "./Axios/Axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//*default access the cookies
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <h1>Redux</h1>
      <ToastContainer theme="dark"/>
      <Router>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
