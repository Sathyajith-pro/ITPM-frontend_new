import { useState } from "react";
import "./register.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log({
      email,
      password,
      firstName,
      lastName,
      address,
      phone,
    });
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/`,{
        email : email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        address: address,
        phone:phone
    }).then(()=>{
       toast.success("Registration Success");
       navigate("/login")
    }).catch((err)=>{
        toast.error(err?.response?.data?.error || "An error occured")
    })
  }

  return (
    <div className="w-full h-screen bg-picture flex items-center justify-center">
      <form onSubmit={handleOnSubmit}>
        <div className="w-[400px] h-[600px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col relative p-6">
          <img
            src="/logo.png"
            className="w-[110px] h-[110px] absolute top-0 object-cover"
          />

          <input
            type="text"
            placeholder="First Name"
            className="mt-6 w-[300px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Last Name"
            className="mt-6 w-[300px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="mt-6 w-[300px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="mt-6 w-[300px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="text"
            placeholder="Address"
            className="mt-6 w-[300px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="mt-6 w-[300px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button
            type="submit"
            className="w-[300px] h-[50px] bg-[#efac38] text-2xl text-white rounded-lg my-5"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
