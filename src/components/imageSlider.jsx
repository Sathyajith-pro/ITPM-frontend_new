import { useState } from "react";

export default function ImageSlider(props){

const images = props.images;
console.log(images);

const [selectedImage,setSelectImage] = useState(images[0])
return(
    <div className="w-full h-full mt-2 flex flex-col items-center  ">
        <img src={selectedImage} alt="product" className="w-full h-[700px] object-cover "/>
        <div className="w-full h-[150px] flex justify-center mt-[20px] ">
            {
                images.map((image,index)=>{
                    return<img key={index} src={image} alt = "product" className={`w-[100px] h-[100px] object-cover cursor-pointer mr-[3px] ${image==selectedImage && " border border-accent"}`} onClick={
                       ()=>{
                        setSelectImage(image);
                       } 
                    }/>
                })
            }
        </div>
    </div>
)
}