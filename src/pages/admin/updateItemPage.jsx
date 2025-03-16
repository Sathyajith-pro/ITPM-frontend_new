import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import mediaUpload from "../../utils/mediaUpload";

export default function UpdateItemPage() {
  const location = useLocation();
  console.log(location)

  const [productKey, setProductKey] = useState(location.state.key);
  const [productName, setProductName] = useState(location.state.name);
  const [productPrice, setProductPrice] = useState(location.state.price);
  const [productCategory, setProductCategory] = useState(location.state.category);
  const [productDimension, setProductDimension] = useState(location.state.dimension);
  const [productDescription, setProductDescription] = useState(location.state.description);
  const [productImages,setProductImages] = useState([]);
  const navigate = useNavigate();

  

  async function handleUpdateItem() {

    let updatingImages = location.state.image //current images

    if(productImages.length > 0 ){
      const promises = [];

       for(let i=0; i<productImages.length;i++){
            console.log(productImages[i]);
            const Promise = mediaUpload(productImages[i])
            promises.push(Promise);
      
            //---Only 5 images can upload---
            // if(i==5){
            //   toast.error("You can only upload 25 images at at a time")
            //   break;
            // }
          }
          updatingImages = await Promise.all(promises);  //update new images
    }
    
    console.log( productKey,productName,productPrice,productCategory,productDimension,productDescription);
    const token = localStorage.getItem("token")
  

    if(token){
        try{
      const result= await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productKey}`,{
            
            name:productName,
            price:productPrice,
            category:productCategory,
            description:productDescription,
            dimension:productDimension,
            image : updatingImages
        },{
            headers :{
                Authorization : "Bearer "+ token
            }
        });
        toast.success(result.data.message);
        navigate("/admin/items");

    }catch(err){
        toast.error("product not added ");
        
    }
        
    }else{
        toast.error("You are not authorized to do action")
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">Update Item</h1>
      <div className="w-[400px] border p-4 flex flex-col gap-3 rounded-lg shadow-md">
        <input
          disabled
          onChange={(e) => setProductKey(e.target.value)}
          value={productKey}
          type="text"
          placeholder="Product Key"
          className="border p-2 w-full rounded"
        />
        <input
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
          type="text"
          placeholder="Product Name"
          className="border p-2 w-full rounded"
        />
        <input
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
          type="number"
          placeholder="Product Price"
          className="border p-2 w-full rounded"
        />
        <select
          onChange={(e) => setProductCategory(e.target.value)}
          value={productCategory}
          className="border p-2 w-full rounded"
        >
          <option value="Audio">Audio</option>
          <option value="Light">Light</option>
        </select>
        <input
          onChange={(e) => setProductDimension(e.target.value)}
          value={productDimension}
          type="text"
          placeholder="Product Dimensions"
          className="border p-2 w-full rounded"
        />
        <textarea
          onChange={(e) => setProductDescription(e.target.value)}
          value={productDescription}
          type="text"
          placeholder="Product Description"
          className="border p-2 w-full rounded"
        />
        <input type="file" multiple onChange={(e)=>{setProductImages(e.target.files)}} className="w-full p-2 border rounded" />
        <button
          onClick={handleUpdateItem}
          className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600"
        >
          Update
        </button>
        <button onClick ={()=>{navigate("/admin/items")}} className="bg-red-600 text-white p-2 w-full rounded hover:bg-red-700"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
