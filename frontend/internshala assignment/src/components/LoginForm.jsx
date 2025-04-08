import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define Zod schema
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const LoginForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    console.log("hello");

    try {
      const response = await fetch(`http://localhost:3000/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });
      const result = await response.json();
      console.log(result);

      if (result.success) {
        // Success case
        console.log("Login success:", result);
        setMessage("form submitted successfully");
        reset({
          email: "",
          password: "",
        });
        // Maybe store token, navigate, etc.
      } else {
        // Error case from backend
        console.error(" Login failed:", result.message || result.error);
      }
    } catch (error) {
      throw new Error(error);
    }
    console.log("Form submitted:", data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="  mt-12 grid  gap-5 justify-items-center  flex-wrap"
      >
        <div>
          <label htmlFor="email" className=""></label>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            placeholder="email"
            {...register("email")}
            className=" bg-white w-xs border-1 rounded-lg p-2 mb-3"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className=""></label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            placeholder="password"
            {...register("password")}
            className=" bg-white  w-xs border-1 rounded-lg p-2 mb-3"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className=" bg-blue-950 hover:bg-blue-600 p-2 w-xs  text-white font-semibold rounded"
        >
          Login
        </button>
        {setMessage && (
          <p className="text-green-600 mt-2 text-sm">{message}</p>
        )}
      </form>
    </>
  );
};

export default LoginForm;
