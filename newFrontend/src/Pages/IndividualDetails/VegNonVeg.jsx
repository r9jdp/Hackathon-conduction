import React, { useContext } from "react";
import styled from "styled-components";
import { userContextIndividual } from "../../contexts/IndividualContext";

const DietPreference = () => {
  const { setResumeData, ResumeData } = useContext(userContextIndividual);
  return (
    <div class="flex gap-x-10 w-full p-5">
      <div class="flex">
        <input
          type="radio"
          name="hs-radio-group"
          class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          id="hs-radio-group-1"
          onClick={() => {
            const temp = { ...ResumeData };
            temp.diet_preference = "Veg";
            setResumeData({ ...temp });
          }}
        />
        <label for="hs-radio-group-1" class="text-xl text-gray-800 ms-2 ">
          Veg
        </label>
      </div>

      <div class="flex">
        <input
          type="radio"
          name="hs-radio-group"
          class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          id="hs-radio-group-2"
          onClick={() => {
            const temp = { ...ResumeData };
            temp.diet_preference = "Non_veg";
            setResumeData({ ...temp });
          }}
        />
        <label for="hs-radio-group-2" class="text-xl text-gray-800 ms-2 ">
          Non-Veg
        </label>
      </div>

      <div class="flex">
        <input
          type="radio"
          name="hs-radio-group"
          class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          id="hs-radio-group-3"
          onClick={() => {
            const temp = { ...ResumeData };
            temp.diet_preference = "Jain";
            setResumeData({ ...temp });
          }}
        />
        <label for="hs-radio-group-3" class="text-xl text-gray-800 ms-2 ">
          Jain
        </label>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .select {
    cursor: pointer;
    position: relative;
    transition: 300ms;
    color: white;
    overflow: hidden;
  }

  .selected {
    background-color: white;
    color: black;
    padding: 8px;
    margin-bottom: 3px;
    border-radius: 5px;
    position: relative;
    z-index: 100000;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .arrow {
    position: relative;
    right: 0px;
    height: 10px;
    transform: rotate(-90deg);
    width: 25px;
    fill: black;
    z-index: 100000;
    transition: 300ms;
  }

  .options {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 5px;
    background-color: white;
    color: black;
    position: relative;
    top: -100px;
    opacity: 0;
    transition: 300ms;
  }

  .select:hover > .options {
    opacity: 1;
    top: 0;
  }

  .select:hover > .selected .arrow {
    transform: rotate(0deg);
  }

  .option {
    border-radius: 5px;
    padding: 5px;
    transition: 300ms;
    background-color: white;
    color: black;
    width: 400px;
    font-size: 15px;
  }
  .option:hover {
    background-color: #9ca3af;
    cursor: pointer;
    color: white;
  }

  .options input[type="radio"] {
    display: none;
  }

  .options label {
    display: inline-block;
  }
  .options label::before {
    content: attr(data-txt);
  }

  .options input[type="radio"]:checked + label {
    display: none;
  }

  .options input[type="radio"]#all:checked + label {
    display: none;
  }

  .select:has(.options input[type="radio"]#all:checked) .selected::before {
    content: attr(data-default);
  }
  .select:has(.options input[type="radio"]#option-1:checked) .selected::before {
    content: attr(data-one);
  }
  .select:has(.options input[type="radio"]#option-2:checked) .selected::before {
    content: attr(data-two);
  }
  .select:has(.options input[type="radio"]#option-3:checked) .selected::before {
    content: attr(data-three);
  }
`;

export default DietPreference;
