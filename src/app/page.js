"use client"
import { useState } from "react";

const Page = () => {
  const [uploadFile, setUploadFile] = useState(null);
  const [data, setData] = useState(null);
  console.log(uploadFile);

  const handleUpload = async () => {

  const formData = new FormData();
  formData.append('file', uploadFile);
  formData.append('upload_preset', 'upload test');
  formData.append('cloud_name', 'djwx6h61e');
  const res = await fetch("https://api.cloudinary.com/v1_1/djwx6h61e/image/upload", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  setData(data.secure_url); 
  };
  
return (
  <div className="box">
    <input type="file" onChange={(e) => setUploadFile(e.target.files[0])}/>
    <button onClick={handleUpload} className="upload">upload</button>
    {data && 
    <img src={data} className="img"/>
    }
  </div>
)
}

export default Page;