import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BasicDetailsInput from "../../Pages/IndividualDetails/BasicFDetailInput";
import GenderRadio from "../../Pages/IndividualDetails/GenderRadio";
import InstituteInput from "../../Pages/IndividualDetails/Institue";

const UserDetailsForm = () => {
  const [inputState, setInputState] = useState({
    basicDetails: true,
    genderDetails: false,
    description: false,
    instituteDetails: false,
    ProjectAndSkills: false,
  });

  const navigate = useNavigate();
  return (
    <div>
      {inputState.instituteDetails ? (
        <InstituteInput inputState={inputState} setInputState={setInputState} />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <StyledWrapper>
            {inputState.basicDetails ? (
              <BasicDetailsInput
                inputState={inputState}
                setInputState={setInputState}
              />
            ) : null}
          </StyledWrapper>
          {inputState.genderDetails ? (
            <GenderRadio
              inputState={inputState}
              setInputState={setInputState}
            />
          ) : null}
        </div>
      )}
    </div>
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
    width: 200px;
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
    width: 200px;
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

export default UserDetailsForm;
