import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";


const Login = () => {
    const navigate = useNavigate();
    const {auth, setAuth} = useAuth();

    const [formData, setFormData] = useState({
      email: "",
      password: ""
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = formData;

        if(!email || !password){
            alert("All fields are required");
            return;
        }

        try{
            const res = await axios.post("/auth/login", {
                email,
                password
            });
            
            if(res.data.message){
                toast.success(res.data.message);
                setAuth({
                    token: res.data.token,
                    user: res.data.user
                });
                localStorage.setItem("auth", JSON.stringify(res.data));
                setFormData({
                    email: "",
                    password: ""
                });
                setTimeout(() => {
                    navigate("/home");
                }, 2000);
            }else{
                toast.error("Something went wrong");
            }
        }catch (e) {
            const errorMsg = e.response?.data?.message || "Something went wrong";
            toast.error(errorMsg);
    }
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your password" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-all">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Register here</Link>
        </p>
      </div>
      <Toaster/>
    </div>
  );
};

export default Login;
