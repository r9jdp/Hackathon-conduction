import { Editor } from "@tinymce/tinymce-react";
import { useContext, useState } from "react";
import { userContextIndividual } from "../../contexts/IndividualContext";

export default function ProjectsAndWorkExperienceDisplay() {
  const { setResumeData, ResumeData } = useContext(userContextIndividual);

  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Projects
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Edit wherever you require a change
          </p>
        </div>
        <div className="mx-auto border-t border-gray-200 pt-10 text-xl">
          <Editor
            apiKey="tyraa3nlvvt4z8lq31m10nq7d55dy1cg9s88d670vykc4b2d"
            value={ResumeData?.projects || null}
            onEditorChange={(content, editor) => {
              const temp = { ...ResumeData };
              temp.projects = content;
              setResumeData({ ...temp });
            }}
            init={{
              height: 500,
              menubar: false,
              plugins: ["lists", "link", "table"],
              toolbar:
                "bold italic underline superscript subscript | bullist numlist",
              content_style:
                "body { font-family: Arial, sans-serif; font-size: 18px; background: none; }", // Set background to none
            }}
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Work Experience
          </h2>
          <p className="mt-2 mb-3 text-lg/8 text-gray-600">
            Edit wherever you require a change
          </p>
        </div>
        <div className="mx-auto border-t border-gray-200 pt-10 text-xl">
          <Editor
            onEditorChange={(content, editor) => {
              const temp = { ...ResumeData };
              temp.work_experience = content;
              setResumeData({ ...temp });
            }}
            apiKey="tyraa3nlvvt4z8lq31m10nq7d55dy1cg9s88d670vykc4b2d"
            value={ResumeData?.work_experience || null}
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
  );
}
