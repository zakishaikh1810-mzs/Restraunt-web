import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex  items-center justify-between px-4 py-4">

        {/* logo */}
      <Link to="/" className="text-2xl font-semibold tracking-wide">
         <span className="text-2xl font-extrabold">ZS</span>
         MENS
      </Link>
      
        <div className="hidden items-center gap-8 md:flex">
        <Link t="/" className="text-sm hover:text-gray-900">Home</Link>
        <Link to="/shop" className="text-sm hover:text-gray-900">Shop</Link>
        <Link to="/collection " className="text-sm hover:text-gray-900">Collection</Link>
        <Link to="/contact" className="text-sm hover:text-gray-900">contact</Link>
        </div>   

        </div>
     
    </nav>
  );
}

export default Navbar;