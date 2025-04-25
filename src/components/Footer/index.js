import logo from "../../assets/icons/logo.svg";
function Footer () {
  return (
    <footer className="border-t border-gray-300 flex flex-col justify-center items-center">
      <div className="container mx-auto py-8 px-12">
        <div className="flex flex-col items-center gap-y-4">
          <img src={logo} alt="Little Lemon logo" />
          <p className="text-center text-gray-600">
            &copy; 2025 Company Name. All rights reserved.
          </p>
        </div>
        <nav className="flex flex-col md:items-center mt-4">
          <ul className="flex flex-col md:flex-row gap-x-8 gap-y-2">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
        <p className="text-center text-gray-600 mt-8">
            Developed with ❤️ by Abd Elrahman Nour (or Ultra).
        </p>
      </div>
    </footer>
  );
}

export default Footer;