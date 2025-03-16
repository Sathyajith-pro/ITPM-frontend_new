import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ImageSlider from "../../components/imageSlider";

export default function ProductOverview(){

    const params =useParams();
    const key = params.key;   //meyata ena key eka ganna me hook eka use karai

    const[loadingStatus,setLoadingStatus] = useState("loading");
    const[product,setProduct] =useState({});

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${key}`).then((res)=>{
            setProduct(res.data);
            setLoadingStatus("loaded");
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
            setLoadingStatus("error")
        })
    },[])

return(
    <div className="w-full h-full flex justify-center">
        {
            loadingStatus == "loading" && <div className="w-full h-full flex items-center justify-center">
                <div className="w-[70px] h-[70px] border-b-2 border-b-accent animate-spin rounded-full ">

                </div>
            </div>
        }
        
        {
            loadingStatus == "loaded" && <div className="w-full h-full flex justify-center items-center">
                 <div className="w-[49%] h-full ">
                    <ImageSlider images = {product.image} />
                 </div>
                 <div className="w-[49%] flex flex-col h-full items-center ">
                    <h1 className="text-3xl font-bold text-accent ">{product.name}</h1>
                    <h2 className="text-xl font-semibold text-gray-800 ">{product.category}</h2>
                    <p className="mt-4 text-sm text-gray-600">{product.description}</p>
                    <p className="mmt-4 text-lg font-bold text-green-500">LKR {product.price}</p>
                    <div className="mt-4 text-sm text-gray-600">
                        <span className="font-medium">Dimension: </span>{product.dimension}
                    </div>
                 </div>

            </div>
        }
        {
            loadingStatus == "error"&& <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-3xl text-accent">Error Occured</h1>
            </div>
            
            

        }
    </div>
)
}