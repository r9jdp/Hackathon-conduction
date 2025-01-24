import { Editor } from "@tinymce/tinymce-react";
import { useContext, useState } from "react";
import { userContextIndividual } from "../../contexts/IndividualContext";

export default function BestDescribesSkills() {
  const { setResumeData, ResumeData } = useContext(userContextIndividual);

  return (
    <div className="w-dvw flex justify-evenly">
      <div className="w-[35%] p-5 m-10 border-2 rounded-lg shadow-xl">
        <p className="text-gray-400 font-light font-[Montserrat] text-xl ml-2 mb-3">
          Best Describes
        </p>
        <Editor
          onEditorChange={(content, editor) => {
            const temp = { ...ResumeData };
            temp.bestdescribes = content;
            setResumeData({ ...temp });
          }}
          value={ResumeData?.bestdescribes || null}
          apiKey="tyraa3nlvvt4z8lq31m10nq7d55dy1cg9s88d670vykc4b2d"
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
      <div className="w-[35%] p-5 m-10 border-2 rounded-lg shadow-xl">
        <p className="text-gray-400 font-light font-[Montserrat] text-xl ml-2 mb-3">
          Skills
        </p>
        <Editor
          value={ResumeData?.skills || null}
          onEditorChange={(content, editor) => {
            const temp = { ...ResumeData };
            temp.skills = content;
            setResumeData({ ...temp });
          }}
          apiKey="tyraa3nlvvt4z8lq31m10nq7d55dy1cg9s88d670vykc4b2d"
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
  );
}
