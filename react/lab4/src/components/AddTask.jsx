import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const ADD = "https://stingray-app-axdpn.ondigitalocean.app/api/todo/find/user";

function AddTask() {
  const formSchema = yup.object({
    title: yup.string().required("Title is required"),
    desc: yup.string(),
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

    const { todo_title, todo_description } = data;

    try {
      await axios
        .post(SIGNUP, {
          user_id: "23",
          todo_title,
          todo_description,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      document.getElementById("my_modal_5").close();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Task!</h3>
          <div className="flex flex-col justify-center gap-4">
            <div>
              <label>Title</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs m-2"
              />
            </div>
            <div>
              <label>Description</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs m-2"
              />
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <div className="flex gap-4">
                <button className="btn btn-success">Create</button>
                <button className="btn">Close</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default AddTask;
