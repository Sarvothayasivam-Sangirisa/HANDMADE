const Header = () => {
  return (
    <header className="relative flex items-center px-6 py-4 bg-white shadow-sm">
      <h1 className="text-lg font-semibold">Sangi’s Craft Studio</h1>
      <nav className="absolute right-6 top-1/2 transform -translate-y-1/4 space-x-6">
        <a href="#" className="hover:text-green-700">Home</a>
        <a href="#" className="hover:text-green-700">About</a>
        <a href="#" className="hover:text-green-700">Products</a>
        <a href="#" className="hover:text-green-700">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
