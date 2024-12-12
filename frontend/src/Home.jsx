import { useEffect, useState } from "react";
import FileUpload from "./components/FileDropping";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./utils/axiosInstance";
import { useMutation, useQueries } from "@tanstack/react-query";
export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await axiosInstance.get("/health");
        console.log(res.status);
      } catch (error) {
        console.error(error.status);
        try {
          const res = await axiosInstance.post("/auth/jwtRefresh");
          console.log(res.status);
        } catch (error) {
          console.error("Access and Refresh missing : ", error.status);
          navigate("/login");
        }
      }
    };
    checkHealth();
  }, [navigate]);

  const Logout = async () => {
    try {
      const res = await axiosInstance.get("/auth/logout");
      console.log(res);
      if (res.status === 200) navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col gap-5 h-dvh">
      <div className="">
        <FileUpload />
      </div>
      <button
        type="button"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={Logout}
      >
        Logout
      </button>
    </div>
  );
}
