import { useContext, useEffect, useState } from "react";
import FileUpload from "./FileDropping";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import RequiresAuth from "../../utils/requiresAuth";
import ResumeNavbar from "./ResumeNavbar";
import ResumeLoaderStatus from "../../utils/ResumeLoader/ResumeLoaderStatus";
import { userContextIndividual } from "../../contexts/IndividualContext";

export default function ResumeUpload() {
  const { setResumeData, ResumeData } = useContext(userContextIndividual);

  const [uploading, setUploading] = useState(false);

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
            <FileUpload
              setResumeData={setResumeData}
              ResumeData={ResumeData}
              states={{ uploading, setUploading }}
            />
          </div>
        </div>
      )}
    </RequiresAuth>
  );
}
