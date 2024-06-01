import { Formik,Form,Field,ErrorMessage} from "formik";
import { SignIngValidation } from "../FormValidation/SignIngValidation";
import axios from "../Axios/Axios";
interface LoginFormValues {
  email: string;
  password: string;
}

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

interface LoginData {
  email: string;
  password: string;
}
const Login = () => {

    const handlesubmit=async(loginData:LoginData)=>{
        try{
            console.log("userDataaaasssss", loginData);
            const response=await axios.post('/login',loginData)
            console.log("🚀 ~ file: Login.tsx:21 ~ handlesubmit ~ response:", response)
            

        }catch(Err){
            console.log(Err);
            
        }
        
    }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Sign In
        </h1>
        <Formik initialValues={initialValues} validationSchema={SignIngValidation} onSubmit={handlesubmit}>
          <Form>
            <div className="mb-4">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:bg-white focus:border-red-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:bg-white focus:border-red-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600 mb-4"
            >
              Sign In
            </button>
          </Form>
        </Formik>
        <p className="text-sm text-gray-600 text-center">
          Don't have an account?{" "}
          <a href="" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
