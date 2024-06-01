import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import profiler_img from "../../assets/img-23.avif";
const Home = () => {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
          <h1 className="font-bold text-xl mb-4">Welcome Home</h1>
          <img
            src={profiler_img}
            className="items-center border-spacing-7 rounded-full"
            alt=""
          />
          <button className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300" onClick={()=>navigate('/profile')}>
            Click Here
          </button >
        </div>
      </div>
    </div>
  );
};

export default Home;
