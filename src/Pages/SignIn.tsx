const SignIn = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-slate-600 w-96 p-4 rounded-lg">
        <h1 className="text-white text-center mb-4">Sign In</h1>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 rounded-lg bg-gray-100 focus:outline-none focus:bg-white"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 rounded-lg bg-gray-100 focus:outline-none focus:bg-white"
          />
        </div>
        <button className="w-full bg-red-700 text-white py-2 rounded-lg hover:bg-red-800 focus:outline-none focus:bg-red-800">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
