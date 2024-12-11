import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
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
    // Change the field name to 'files' to match the backend handler
    files.forEach((file) => formData.append("files", file));

    try {
      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        console.log("File uploaded successfully:", result);
      } else {
        console.error("File upload failed:", result.message);
      }
    } catch (error) {
      console.error("Error during file upload:", error);
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
        className="p-3 bg-white border border-solid border-gray-300 rounded-xl"
        key={file.path}
      >
        <div className="mb-1 flex justify-between items-center">
          <div className="flex items-center gap-x-3">
            <span className="size-10 flex justify-center items-center border border-gray-200 text-gray-500 rounded-lg">
              <img
                className="rounded-lg hidden"
                src={URL.createObjectURL(file)}
                alt={file.name}
              />
              {fileIcon}
            </span>
            <div>
              <p className="text-sm font-medium text-gray-800">
                <span className="truncate inline-block max-w-[300px] align-bottom">
                  {file.name}
                </span>
              </p>
              <p className="text-xs text-gray-500">{file.size} bytes</p>
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
    <div>
      <div
        {...getRootProps()}
        className="cursor-pointer p-12 flex justify-center bg-white border border-dashed border-gray-300 rounded-xl"
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
              Drop your file here or
            </span>
            <span className="bg-white font-semibold text-blue-600 hover:text-blue-700 rounded-lg decoration-2 hover:underline">
              browse
            </span>
          </div>
          <p className="mt-1 text-xs text-gray-400">Pick a file up to 2MB.</p>
        </div>
      </div>

      <div className="mt-4 space-y-2 empty:mt-0">
        {files.map(renderFilePreview)}
      </div>
      {files.length > 0 && (
        <button
          type="button"
          onClick={handleUpload}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded cursor-pointer"
        >
          Upload File
        </button>
      )}
    </div>
  );
};

export default FileUpload;
