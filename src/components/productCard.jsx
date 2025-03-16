import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
    return (
        <div className=" rounded-lg overflow-hidden shadow-lg  p-4 border-separate m-2 h-[470px] bg-white">
            {/* Product Image */}
            <img 
                src={item.image[0]} 
                alt={item.name} 
                className="w-full h-48 object-cover rounded-md"
            />

            {/* Product Info */}
            <div  className="mt-4 ">
                <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                <p className="text-gray-500">{item.category}</p>
                <p className="text-gray-700 mt-2">{item.description}</p>

                {/* Price & Availability */}
                <div className="flex items-center justify-between mt-3">
                    <span className="text-lg font-semibold text-green-600">
                         {item.price}
                    </span>
                    <span className={`text-sm px-3 py-1 rounded-full ${item.availability ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                        {item.availability ? "In Stock" : "Out of Stock"}
                    </span>
                </div>

                {/* Add to Cart Button */}
                
                <Link to={"/product/"+item.key} className="mt-10 justify-center  flex w-full text-center  bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                
                    View Details
                </Link>
            </div>
        </div>
    );
}
