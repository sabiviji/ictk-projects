import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
// import { SIGNUP } from "../const/endpoints";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const SIGNUP = "https://stingray-app-axdpn.ondigitalocean.app/api/auth/signup";

function RegisterForm() {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const formSchema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitData = async (data) => {
    console.log(data);

    const { username, email, password } = data;

    try {
      await axios
        .post(SIGNUP, {
          username,
          email,
          password,
        })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Hey just register! You are safe here</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(submitData)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="username"
                  placeholder="username"
                  className="input input-bordered"
                  {...register("username")}
                  required
                />
                <p className="text-red-400">{errors.username?.message}</p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email")}
                  required
                />
                <p className="text-red-400">{errors.username?.message}</p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password")}
                  required
                />
                <p className="text-red-400">{errors.username?.message}</p>
              </div>
              <label className="label flex underline justify-center">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have account?
                </Link>
              </label>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
