import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen , setisOpen]=useState(false);
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex  items-center justify-between px-4 py-4">

        {/* logo */}
      <Link to="/" className="text-2xl font-semibold tracking-wide">
         <span className="text-2xl font-extrabold">ZS</span>
         MENS
      </Link>
      
        <div className="hidden items-center gap-8 md:flex">
        <Link to="/" className="text-sm hover:text-gray-900">Home</Link>
        <Link to="/shop" className="text-sm hover:text-gray-900">Shop</Link>
        <Link to="/collections" className="text-sm hover:text-gray-900">Collection</Link>
        <Link to="/contact" className="text-sm hover:text-gray-900">contact</Link>
        </div>   
      
        <button className="text-3xl md:hidden"
        onClick={() => setisOpen(!isOpen)}>
        {isOpen ? "X" : "☰"}
        </button>
        </div>

    {
      isOpen&&(
        

          <div className={`grid transition-all duration-700  ease-in-out md:hidden ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}>

            <div className="flex flex-col gap-5 border-t px-4 py-5">
           <Link to="/" className="text-lg font-medium mt-5"
           onClick={()=>setisOpen(false)}>Home</Link>

              <Link to="/Shop" className="text-lg font-medium mt-5"
           onClick={()=>setisOpen(false)}>Shop</Link>

              <Link to="/Collection" className="text-lg font-medium mt-5"
           onClick={()=>setisOpen(false)}>collection</Link>

              <Link to="/contact" className="text-lg font-medium mt-5 mb-5"
           onClick={()=>setisOpen(false)}>contact</Link>
          </div>

        </div>
      )
    } 
 
    </nav>
  );
}

export default Navbar;