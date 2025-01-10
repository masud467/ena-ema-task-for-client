"use client";

import { useState } from "react";
import axios from "axios";
import styles from "../styles/login.module.css";
import { useRouter } from "next/navigation";


const LoginPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const router= useRouter()
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", formData);
      setMessage(response.data.message);
      setTimeout(()=>{
        setMessage("");
        router.push("/")
      },200)
      setFormData({name: "", email: "", password: ""});
      
    } catch (error) {
      console.error("Login error:", error);
      setMessage("An error occurred. Please try again.");
      setTimeout(()=>{
        setMessage("");
        
      },2000)
    }
    
  };

  return (
    <div className={styles.container}>
        {message && (
        <div className=''>
          <p>{message}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Welcome Back!</h2>
        <p className={styles.subtitle}>Login to your account</p>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
      
    </div>
  );
};

export default LoginPage;
