import React, { useState } from "react";
import DietPreference from "./VegNonVeg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styled from "styled-components";
import ProjectsAndWorkExperienceDisplay from "./Projects";
import { Editor } from "@tinymce/tinymce-react";
import BestDescribesSkills from "./BestDescribesSkills";
import { useUserContext } from "../Context/UserContext";
import axiosInstance from "./axiosInstance";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const InstituteInput = ({ inputState, setInputState }) => {
  const { resumeData, setResumeData } = useUserContext();
  const [sendingData, setSendingData] = useState(false);
  const navigate = useNavigate();
  const handleOnChange = (e, field) => {
    const temp = { ...resumeData };
    temp[field] = e.target.value;
    setResumeData({ ...temp });
  };

  const handleSubmit = async () => {
    try {
      setSendingData(true);
      console.log("Sending data : ", resumeData);
      const dataSent = await axiosInstance.post("/user/createUser", {
        resumeData,
      });
      setSendingData(false);
      console.log("Data received : ", dataSent, dataSent.status);
      if (dataSent.status === 401) {
        navigate("/login");
        return;
      }
      if (dataSent.status === 200) {
        navigate("/");
        return;
      }
      if (dataSent.status === 400) {
        navigate("/participant/resume");
        return;
      }
      console.log("Data sent : ", dataSent);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  useGSAP(() => {
    gsap.from(".gsapani", {
      duration: 1,
      opacity: 0,
      x: 90,
      ease: "power2.out",
      stagger: 0.2,
    });
    gsap.from(".description", {
      duration: 1,
      opacity: 0,
      y: 100,
      ease: "power2.out",
      stagger: 0.2,
    });

    gsap.from(".wave-group", {
      duration: 0.5,
      opacity: 0,
      y: 100,
      ease: "power2.out",
      stagger: 0.1,
    });
  });

  if (sendingData) {
    return (
      <div className="w-full h-screen flex justify-center flex-col gap-10 text-black items-center">
        <Loading />
        <h1 className="mt-10 font-semibold text-xl select-none">
          Gettings Things ready . . .{" "}
        </h1>
      </div>
    );
  } else
    return (
      <>
        <StyledWrapper>
          <div className="w-dvw flex flex-col">
            <div className="w-full flex justify-evenly">
              <div className="gsapani BasicDetails border-2 rounded-xl shadow-lg flex flex-col justify-center gap-10 w-[35%] m-10 p-5">
                {/* Institute Input */}
                <div className="wave-group">
                  <input
                    required
                    type="text"
                    className="input"
                    defaultValue={resumeData?.educational_institute || null}
                    onChange={(e) => handleOnChange(e, "educational_institute")}
                  />
                  <span className="bar" />
                  <label className="label">
                    <span className="label-char" style={{ "--index": 0 }}>
                      I
                    </span>
                    <span className="label-char" style={{ "--index": 1 }}>
                      n
                    </span>
                    <span className="label-char" style={{ "--index": 2 }}>
                      s
                    </span>
                    <span className="label-char" style={{ "--index": 3 }}>
                      t
                    </span>
                    <span className="label-char" style={{ "--index": 4 }}>
                      i
                    </span>
                    <span className="label-char" style={{ "--index": 5 }}>
                      t
                    </span>
                    <span className="label-char" style={{ "--index": 6 }}>
                      u
                    </span>
                    <span className="label-char" style={{ "--index": 7 }}>
                      e
                    </span>
                  </label>
                </div>

                {/* Degree Type Input */}
                <div className="wave-group">
                  <input
                    required
                    type="text"
                    className="input"
                    defaultValue={resumeData?.degree_type || null}
                    onChange={(e) => handleOnChange(e, "degree_type")}
                  />
                  <span className="bar" />
                  <label className="label">
                    <span className="label-char" style={{ "--index": 0 }}>
                      D
                    </span>
                    <span className="label-char" style={{ "--index": 1 }}>
                      e
                    </span>
                    <span className="label-char" style={{ "--index": 2 }}>
                      g
                    </span>
                    <span className="label-char" style={{ "--index": 3 }}>
                      r
                    </span>
                    <span className="label-char" style={{ "--index": 4 }}>
                      e
                    </span>
                    <span className="label-char" style={{ "--index": 4 }}>
                      -
                    </span>
                    <span className="label-char" style={{ "--index": 5 }}>
                      T
                    </span>
                    <span className="label-char" style={{ "--index": 6 }}>
                      y
                    </span>
                    <span className="label-char" style={{ "--index": 6 }}>
                      p
                    </span>
                    <span className="label-char" style={{ "--index": 6 }}>
                      e
                    </span>
                  </label>
                </div>

                {/* Year of Start Input */}
                <div className="wave-group">
                  <input
                    required
                    type="number"
                    className="input"
                    defaultValue={resumeData?.yearofStart_degree || null}
                    onChange={(e) => handleOnChange(e, "yearofStart_degree")}
                  />
                  <span className="bar" />
                  <label className="label">
                    <span className="label-char" style={{ "--index": 0 }}>
                      Y
                    </span>
                    <span className="label-char" style={{ "--index": 1 }}>
                      e
                    </span>
                    <span className="label-char" style={{ "--index": 2 }}>
                      a
                    </span>
                    <span className="label-char" style={{ "--index": 3 }}>
                      r
                    </span>
                    <span className="label-char" style={{ "--index": 4 }}>
                      o
                    </span>
                    <span className="label-char" style={{ "--index": 5 }}>
                      f
                    </span>
                    <span className="label-char" style={{ "--index": 6 }}>
                      S
                    </span>
                    <span className="label-char" style={{ "--index": 7 }}>
                      t
                    </span>
                    <span className="label-char" style={{ "--index": 8 }}>
                      a
                    </span>
                    <span className="label-char" style={{ "--index": 9 }}>
                      r
                    </span>
                    <span className="label-char" style={{ "--index": 10 }}>
                      t
                    </span>
                  </label>
                </div>

                {/* Graduation Year Input */}
                <div className="wave-group">
                  <input
                    required
                    type="number"
                    className="input"
                    defaultValue={resumeData?.graduation_year || null}
                    onChange={(e) => handleOnChange(e, "graduation_year")}
                  />
                  <span className="bar" />
                  <label className="label">
                    <span className="label-char" style={{ "--index": 0 }}>
                      G
                    </span>
                    <span className="label-char" style={{ "--index": 1 }}>
                      r
                    </span>
                    <span className="label-char" style={{ "--index": 2 }}>
                      a
                    </span>
                    <span className="label-char" style={{ "--index": 3 }}>
                      d
                    </span>
                    <span className="label-char" style={{ "--index": 4 }}>
                      u
                    </span>
                    <span className="label-char" style={{ "--index": 5 }}>
                      a
                    </span>
                    <span className="label-char" style={{ "--index": 6 }}>
                      t
                    </span>
                    <span className="label-char" style={{ "--index": 7 }}>
                      i
                    </span>
                    <span className="label-char" style={{ "--index": 8 }}>
                      o
                    </span>
                    <span className="label-char" style={{ "--index": 9 }}>
                      n
                    </span>
                    <span className="label-char" style={{ "--index": 9 }}>
                      -Y
                    </span>
                    <span className="label-char" style={{ "--index": 9 }}>
                      e
                    </span>
                    <span className="label-char" style={{ "--index": 9 }}>
                      a
                    </span>
                    <span className="label-char" style={{ "--index": 9 }}>
                      r
                    </span>
                  </label>
                </div>

                {/* Grade Input */}
                <div className="wave-group">
                  <input
                    required
                    type="number"
                    className="input"
                    defaultValue={resumeData?.grade || null}
                    onChange={(e) => handleOnChange(e, "grade")}
                  />
                  <span className="bar" />
                  <label className="label">
                    <span className="label-char" style={{ "--index": 0 }}>
                      G
                    </span>
                    <span className="label-char" style={{ "--index": 1 }}>
                      r
                    </span>
                    <span className="label-char" style={{ "--index": 2 }}>
                      a
                    </span>
                    <span className="label-char" style={{ "--index": 3 }}>
                      d
                    </span>
                    <span className="label-char" style={{ "--index": 4 }}>
                      e(CGPA)
                    </span>
                  </label>
                </div>

                <div className="flex justify-start p-1 h-max ">
                  <DietPreference />
                </div>
              </div>

              <div className="w-[35%] m-10 border-2 rounded-lg shadow-lg p-5 gsapani">
                <div className="w-[100%] h-[86%] p-5">
                  <p className="text-gray-400 font-light font-[Montserrat] text-xl ml-2 mb-3">
                    Bio
                  </p>
                  <Editor
                    className="description"
                    apiKey="tyraa3nlvvt4z8lq31m10nq7d55dy1cg9s88d670vykc4b2d"
                    onEditorChange={(content, editor) => {
                      const temp = { ...resumeData };
                      temp.description = content;
                      setResumeData({ ...temp });
                    }}
                    value={resumeData?.description || null}
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: ["lists", "link", "table"],
                      toolbar:
                        "bold italic underline superscript subscript | bullist numlist",
                      content_style:
                        "body { font-family: Arial, sans-serif; font-size: 18px }",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </StyledWrapper>

        <div className="gsapani">
          <BestDescribesSkills />
        </div>

        <div className="gsapani">
          <ProjectsAndWorkExperienceDisplay />
        </div>

        <div className="flex items-center justify-end w-[75%] p-5 mx-auto m-10">
          <button
            type="button"
            onClick={handleSubmit}
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border  shadow-sm  focus:outline-none  disabled:opacity-50 disabled:pointer-events-none bg-neutral-800 border-neutral-700 text-white hover:bg-neutral-700 focus:bg-neutral-700"
          >
            Let's Get Started
            <svg
              class="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </>
    );
};

const StyledWrapper = styled.div`
  .wave-group {
    position: relative;
  }

  .wave-group .input {
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 90%;
    border: none;
    border-bottom: 1px solid #515151;
    background: transparent;
  }

  .wave-group .input:focus {
    outline: none;
  }

  .wave-group .label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    display: flex;
  }

  .wave-group .label-char {
    transition: 0.2s ease all;
    transition-delay: calc(var(--index) * 0.05s);
  }

  .wave-group .input:focus ~ label .label-char,
  .wave-group .input:valid ~ label .label-char {
    transform: translateY(-20px);
    font-size: 14px;
    color: #5264ae;
  }

  .wave-group .bar {
    position: relative;
    display: block;
    width: 90%;
  }

  .wave-group .bar:before,
  .wave-group .bar:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264ae;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .wave-group .bar:before {
    left: 50%;
  }

  .wave-group .bar:after {
    right: 50%;
  }

  .wave-group .input:focus ~ .bar:before,
  .wave-group .input:focus ~ .bar:after {
    width: 50%;
  }
`;

export default InstituteInput;
