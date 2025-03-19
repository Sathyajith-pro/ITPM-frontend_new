import { Link, useNavigate } from "react-router-dom";


export default function Header() {
    const navigate=useNavigate();
  return (
    <header className="w-full h-[100px] shadow-xl flex justify-center items-center relative bg-gradient-to-r from-white to-blue-50 text-blue-800">
      <div className="absolute left-4">
        <div className="relative">
          <img 
            src="logo.png" 
            alt="logo" 
            className="w-[90px] h-[90px] object-cover border-4 border-blue-500 rounded-full shadow-lg transition-transform hover:scale-105"
          />
          <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            Premium
          </div>
        </div>
      </div>
      
      <nav className="flex space-x-8">
        <Link 
          to="/" 
          className="text-[22px] font-bold py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors duration-300 flex items-center"
        >
          HOME
        </Link>
        <Link 
          to="/contact" 
          className="text-[22px] font-bold py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors duration-300 flex items-center"
        >
          CONTACT
        </Link>
        <Link 
          to="/gallery" 
          className="text-[22px] font-bold py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors duration-300 flex items-center"
        >
          GALLERY
        </Link>
        <Link 
          to="/items" 
          className="text-[22px] font-bold py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors duration-300 flex items-center"
        >
          EVENT
        </Link>
      </nav>

      <div className="absolute right-5 flex items-center space-x-2 ">
        <div className="relative w-64 hidden md:block">
          <input 
            type="text" 
            placeholder="Search... " 
            className="w-full py-2 pl-4 pr-10 rounded-full text-sm border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
          />
          <svg 
            className="w-5 h-5 absolute right-3 top-5 text-blue-400 flex  " 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <button onClick={()=>{
                    navigate(`/login`)
                  }} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg transition-colors flex  ">
          Sign In
        </button>
      </div>
    </header>
  );
}