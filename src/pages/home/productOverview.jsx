import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../../components/imageSlider";

export default function ProductOverview() {
    const params = useParams();
    const key = params.key;
   
    const [loadingStatus, setLoadingStatus] = useState("loading");
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${key}`)
            .then((res) => {
                setProduct(res.data);
                setLoadingStatus("loaded");
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
                setLoadingStatus("error");
            });
    }, []);
    
    return (
        <div className="w-full min-h-screen flex -mt-20  items-center bg-gray-100 p-6">
            
            {loadingStatus === "loading" && (
                <div className="flex items-center justify-center w-full h-full">
                    <div className="w-16 h-16 border-4 border-t-accent animate-spin rounded-full"></div>
                    
                </div>
                
            )}
            {loadingStatus === "loaded" && (
                
                <div className="w-full h-[900px]  bg-white shadow-lg rounded-lg overflow-hidden p-5 flex flex-col mt-14 relative ">
                    <div className="w-[65%] flex flex-col mx-[450px]   p-5 justify-center items-center bg-gray-200 rounded-xl">
                        <h1 className="text-3xl font-bold text-accent  flex ">{product.name}</h1>
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">{product.category}</h2>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <p className="text-lg font-bold text-green-600 mb-2">LKR {product.price}</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Vanue: </span>{product.dimension}</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Time: </span>{product.timeAdded} PM</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Date: </span>{product.dateAdded} PM</p>
                        <button className="mt-6 bg-accent hover:bg-accent-dark text-white py-2 px-4 rounded-lg transition-all duration-300">Buy Now</button>
                    </div>
                    <div className="w-[49%] h-[300px] max-w-[400px] -my-[350px] flex ">
                        <ImageSlider images={product.image} />
                    </div>
                  <div className="w-[500px] h-[500px] border-4 bg-red-400   absolute flex right-2 top-[500px]"></div>
                    
                     
                     </div>
                
                
            )}
            {loadingStatus === "error" && (
                <div className="flex items-center justify-center w-full h-full">
                    <h1 className="text-3xl font-bold text-red-500">Error Occurred</h1>
                </div>
            )}
        </div>
    );
}