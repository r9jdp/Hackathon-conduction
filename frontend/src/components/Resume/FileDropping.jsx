import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const FileUpload = (data) => {
  useGSAP(() => {
    gsap.from(".gsapani", {
      duration: 1,
      opacity: 0,
      scale: 0.98,
      ease: "power2.out",
      stagger: 0.2,
    });
  });

  const { setResumeData, userData } = useUserContext();
  const [files, setFiles] = useState([]);
  const { uploading, setUploading } = data.states;
  const navigate = useNavigate();
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [".jpg"], // This will only accept JPG/JPEG files
    },
    maxSize: 5 * 1024 * 1024, // 5MB max file size
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles); // Set files when dropped
    },
  });

  const handleRemoveFile = (file) => {
    setFiles(files.filter((f) => f !== file)); // Remove file from state
  };

  const handleUpload = async () => {
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));
    for (let key in userData.loginData) {
      formData.append(key, userData.loginData[key]); // Add user data to FormData
    }

    try {
      setUploading(true); // Set uploading to true when the upload starts
      const response = await axiosInstance.post("/upload", formData);
      const result = response.data;

      if (response.status === 200) {
        console.log("File uploaded successfully:", result.result);
        // setResumeData(JSON.parse(result.result));
        setResumeData(result.result);

        navigate("/UserDetailsConfrmation");
      } else {
        console.error("File upload failed:", result.message);
      }
    } catch (error) {
      console.error("Error during file upload:", error);
    } finally {
      setUploading(false); // Set uploading to false when the upload completes or fails
    }
  };

  const renderFilePreview = (file) => {
    const fileExtension = file.name.split(".").pop();
    let fileIcon;

    if (fileExtension === "csv") {
      fileIcon = <span>CSV</span>; // Example for CSV files
    } else {
      fileIcon = <span>{fileExtension}</span>;
    }

    return (
      <div
        className=" p-3 bg-white border border-solid border-gray-300 rounded-lg"
        style={{ background: "rgb(233, 240, 255)" }}
        key={file.path}
      >
        <div className="mb-1 flex justify-between items-center">
          <div className="flex items-center gap-x-3">
            <span className="size-10 flex justify-center items-center text-gray-500 ">
              <img
                className="rounded-sm hidden"
                src={URL.createObjectURL(file)}
                alt={file.name}
              />
              <svg
                fill="rgb(109, 146, 244)"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path>
                  <path d="M18.153 6h-.009v5.342H23.5v-.002z"></path>
                </g>
              </svg>
            </span>
            <div>
              <p className="text-[1rem] font-medium text-gray-800 mx-2">
                <span className="truncate font-semibold inline-block max-w-[300px] align-bottom">
                  {file.name}
                </span>
              </p>
              <p className="text-xs mx-2 mt-1 text-gray-500">
                {file.size / 1000} KB
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-800"
              onClick={() => handleRemoveFile(file)}
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" x2="10" y1="11" y2="17" />
                <line x1="14" x2="14" y1="11" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="gsapani shadow-md p-12 rounded-lg "
        style={{ background: "rgb(251 249 255)" }}
      >
        <div
          {...getRootProps()}
          className=" cursor-pointer p-10 flex justify-center bg-none border-2 border-dashed border-blue-100 rounded-xl"
        >
          <input {...getInputProps()} />
          <div className="text-center">
            <span className="inline-flex justify-center items-center size-16 bg-gray-100 text-gray-800 rounded-full">
              <svg
                className="shrink-0 size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" x2="12" y1="3" y2="15" />
              </svg>
            </span>
            <div className="mt-4 flex flex-wrap justify-center text-sm leading-6 text-gray-600">
              <span className="pe-1 font-medium text-gray-800">
                Drop your Resume file here or
              </span>
              <span className="bg-white font-semibold text-blue-600 hover:text-blue-700 rounded-lg decoration-2 hover:underline">
                browse
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-400">Pick a file up to 5MB.</p>
          </div>
        </div>

        <div className="mt-4 space-y-2 empty:mt-0">
          {files.map(renderFilePreview)}
        </div>
      </div>
      {files.length > 0 && (
        <button
          type="button"
          onClick={handleUpload}
          className="mt-4 ml-2 hover:bg-blue-700 bg-blue-600 text-white py-2 px-4 rounded cursor-pointer"
        >
          Upload File
        </button>
      )}
    </>
  );
};

export default FileUpload;
