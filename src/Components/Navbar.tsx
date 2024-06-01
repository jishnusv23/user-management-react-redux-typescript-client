const Navbar = () => {
  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Navbar</h1>
        <div className="flex space-x-4">
          <p className="text-white font-bold h-12 flex items-center hover:text-green-200 transition-colors duration-300">
            Profile
          </p>
          <p className="text-white font-bold h-12 flex items-center hover:text-green-200 transition-colors duration-300">
            Settings
          </p>
          <p className="text-white font-bold h-12 flex items-center hover:text-green-200 transition-colors duration-300">
            Logout
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
