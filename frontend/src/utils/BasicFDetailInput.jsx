import React from "react";
import styled from "styled-components";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useUserContext } from "../Context/UserContext";

const BasicDetailsInput = ({ inputState, setInputState }) => {
  const { resumeData, setResumeData } = useUserContext();

  const handleOnChange = (e, field) => {
    const temp = { ...resumeData };
    temp[field] = e.target.value;
    setResumeData({ ...temp });
  };

  useGSAP(() => {
    gsap.from(".gsapani", {
      duration: 1,
      opacity: 0,
      x: 90,
      ease: "power2.out",
      stagger: 0.2,
    });

    gsap.from(".wave-group", {
      duration: 0.5,
      opacity: 0,
      y: 90,
      ease: "power2.out",
      stagger: 0.1,
    });
  });

  return (
    <div className="gsapani BasicDetails grid grid-cols-1 sm:grid-cols-2 gap-10">
      <div className="wave-group">
        <input
          required
          type="text"
          className="input"
          defaultValue={resumeData?.fname || null}
          onChange={(e) => {
            handleOnChange(e, "fname");
          }}
        />
        <span className="bar" />
        <label className="label">
          <span className="label-char" style={{ "--index": 0 }}>
            First-
          </span>
          <span className="label-char" style={{ "--index": 0 }}>
            N
          </span>
          <span className="label-char" style={{ "--index": 1 }}>
            a
          </span>
          <span className="label-char" style={{ "--index": 2 }}>
            m
          </span>
          <span className="label-char" style={{ "--index": 3 }}>
            e
          </span>
        </label>
      </div>

      <div className="wave-group">
        <input
          required
          type="text"
          className="input"
          defaultValue={resumeData?.lname || null}
          onChange={(e) => {
            handleOnChange(e, "lname");
          }}
        />
        <span className="bar" />
        <label className="label">
          <span className="label-char" style={{ "--index": 0 }}>
            Last-
          </span>
          <span className="label-char" style={{ "--index": 0 }}>
            N
          </span>
          <span className="label-char" style={{ "--index": 1 }}>
            a
          </span>
          <span className="label-char" style={{ "--index": 2 }}>
            m
          </span>
          <span className="label-char" style={{ "--index": 3 }}>
            e
          </span>
        </label>
      </div>

      <div className="wave-group">
        <input
          required
          type="number"
          className="input"
          defaultValue={resumeData?.age || null}
          onChange={(e) => {
            handleOnChange(e, "age");
          }}
        />
        <span className="bar" />
        <label className="label">
          <span className="label-char" style={{ "--index": 0 }}>
            A
          </span>
          <span className="label-char" style={{ "--index": 1 }}>
            g
          </span>
          <span className="label-char" style={{ "--index": 3 }}>
            e
          </span>
        </label>
      </div>

      <div className="wave-group">
        <input
          required
          type="date"
          className="input"
          defaultValue={
            resumeData?.dob || new Date().toISOString().split("T")[0]
          }
          onChange={(e) => {
            handleOnChange(e, "dob");
          }}
        />
        <span className="bar" />
        <label className="label">
          <span className="label-char" style={{ "--index": 0 }}>
            D
          </span>
          <span className="label-char" style={{ "--index": 1 }}>
            a
          </span>
          <span className="label-char" style={{ "--index": 2 }}>
            t
          </span>
          <span className="label-char" style={{ "--index": 3 }}>
            e
          </span>
        </label>
      </div>

      <div className="wave-group">
        <input
          required
          type="text"
          className="input"
          defaultValue={resumeData?.contact || null}
          onChange={(e) => {
            handleOnChange(e, "contact");
          }}
        />
        <span className="bar" />
        <label className="label">
          <span className="label-char" style={{ "--index": 0 }}>
            C
          </span>
          <span className="label-char" style={{ "--index": 1 }}>
            o
          </span>
          <span className="label-char" style={{ "--index": 2 }}>
            n
          </span>
          <span className="label-char" style={{ "--index": 3 }}>
            t
          </span>
          <span className="label-char" style={{ "--index": 4 }}>
            a
          </span>
          <span className="label-char" style={{ "--index": 5 }}>
            c
          </span>
          <span className="label-char" style={{ "--index": 6 }}>
            t
          </span>
        </label>
      </div>

      <div className="wave-group">
        <input
          required
          type="text"
          className="input"
          defaultValue={resumeData?.email || null}
          onChange={(e) => {
            handleOnChange(e, "email");
          }}
        />
        <span className="bar" />
        <label className="label">
          <span className="label-char" style={{ "--index": 0 }}>
            E
          </span>
          <span className="label-char" style={{ "--index": 0 }}>
            m
          </span>
          <span className="label-char" style={{ "--index": 1 }}>
            a
          </span>
          <span className="label-char" style={{ "--index": 2 }}>
            i
          </span>
          <span className="label-char" style={{ "--index": 3 }}>
            l
          </span>
        </label>
      </div>

      <div className="wave-group">
        <input
          required
          type="text"
          className="input"
          defaultValue={resumeData?.github || null}
          onChange={(e) => {
            handleOnChange(e, "github");
          }}
        />
        <span className="bar" />
        <label className="label">
          <span className="label-char" style={{ "--index": 0 }}>
            G
          </span>
          <span className="label-char" style={{ "--index": 1 }}>
            i
          </span>
          <span className="label-char" style={{ "--index": 2 }}>
            t
          </span>
          <span className="label-char" style={{ "--index": 3 }}>
            h
          </span>
          <span className="label-char" style={{ "--index": 4 }}>
            u
          </span>
          <span className="label-char" style={{ "--index": 5 }}>
            b
          </span>
        </label>
      </div>

      <div className="wave-group">
        <input
          required
          type="text"
          className="input"
          defaultValue={resumeData?.linkedin || null}
          onChange={(e) => {
            handleOnChange(e, "linkedin");
          }}
        />
        <span className="bar" />
        <label className="label">
          <span className="label-char" style={{ "--index": 0 }}>
            L
          </span>
          <span className="label-char" style={{ "--index": 1 }}>
            i
          </span>
          <span className="label-char" style={{ "--index": 2 }}>
            n
          </span>
          <span className="label-char" style={{ "--index": 3 }}>
            k
          </span>
          <span className="label-char" style={{ "--index": 4 }}>
            e
          </span>
          <span className="label-char" style={{ "--index": 5 }}>
            d
          </span>
          <span className="label-char" style={{ "--index": 6 }}>
            i
          </span>
          <span className="label-char" style={{ "--index": 7 }}>
            n
          </span>
        </label>
      </div>

      <div className="wave-group">
        <input
          required
          type="text"
          className="input"
          defaultValue={resumeData?.location || null}
          onChange={(e) => {
            handleOnChange(e, "location");
          }}
        />
        <span className="bar" />
        <label className="label">
          <span className="label-char" style={{ "--index": 0 }}>
            L
          </span>
          <span className="label-char" style={{ "--index": 1 }}>
            o
          </span>
          <span className="label-char" style={{ "--index": 2 }}>
            c
          </span>
          <span className="label-char" style={{ "--index": 3 }}>
            a
          </span>
          <span className="label-char" style={{ "--index": 4 }}>
            t
          </span>
          <span className="label-char" style={{ "--index": 5 }}>
            i
          </span>
          <span className="label-char" style={{ "--index": 6 }}>
            o
          </span>
          <span className="label-char" style={{ "--index": 7 }}>
            n
          </span>
        </label>
      </div>

      <button
        onClick={() => {
          const temp = { ...inputState };
          temp.basicDetails = false;
          temp.genderDetails = true;
          setInputState({ ...temp });
          console.log("Input component: ", temp);
        }}
        type="submit"
        className="flex justify-center gap-2 items-center mx-auto shadow-xs text-lg bg-emerald-500 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
      >
        Next
        <svg
          className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
          viewBox="0 0 16 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            className="fill-gray-800 group-hover:fill-gray-800"
          />
        </svg>
      </button>
    </div>
  );
};

export default BasicDetailsInput;
