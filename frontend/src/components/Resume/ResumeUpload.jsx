import { useEffect, useState } from "react";
import FileUpload from "./FileDropping";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import RequiresAuth from "../../utils/requiresAuth";
import { useUserContext } from "../../Context/UserContext";
import ResumeLoaderStatus from "../../utils/ResumeLoader/ResumeLoaderStatus";
import ResumeNavbar from "./ResumeNavbar";

export default function ResumeUpload() {
  const { setResumeData } = useUserContext();
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
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
    <RequiresAuth>
      {uploading ? (
        <ResumeLoaderStatus />
      ) : (
        <div
          className="flex justify-center items-center flex-col gap-5 h-dvh"
          style={{ backgroundColor: "rgba(0, 110, 255, 0.041)" }}
        >
          <ResumeNavbar />
          <div>
            <FileUpload states={{ uploading, setUploading }} />
          </div>
          {/* <button
            type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={Logout}
          >
            Logout
          </button> */}
        </div>
      )}
    </RequiresAuth>
  );
}
