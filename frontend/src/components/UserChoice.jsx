import { useNavigate } from "react-router-dom";
import RequiresAuth from "../utils/requiresAuth";
import ResumeNavbar from "./Resume/ResumeNavbar";

export default function UserChoice() {
  const navigate = useNavigate();

  return (
    <RequiresAuth>
      <div
        className="h-screen flex flex-col justify-center items-center gap-10 "
        style={{ backgroundColor: "rgba(0, 110, 255, 0.041)" }}
      >
        <ResumeNavbar />

        <h2 className=" text-center text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Decide Your Role
        </h2>
        <div className="gr mx-auto max-w-3xl items-stretch space-y-4 text-left sm:flex sm:space-y-0 sm:space-x-8 sm:text-center">
          <div
            className="cursor-pointer flex w-full items-center rounded-xl border border-black border-opacity-10 px-4 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg sm:flex-col sm:hover:shadow-2xl"
            href="#"
            target="_blank"
          >
            <img
              className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32"
              src="https://swiperjs.com/images/projects/framework7.svg"
              alt="Framework7"
            />
            <div>
              <div className="font-bold text-black text-2xl sm:mt-4 sm:mb-2">
                Organiser
              </div>
              <div className="text-sm opacity-75">
                Manage the event, set up challenges, and coordinate with
                participants.
              </div>
            </div>
          </div>
          <div
            className="cursor-pointer flex w-full items-center rounded-xl border border-black border-opacity-10 px-4 py-6 text-black duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg sm:flex-col sm:hover:shadow-2xl"
            href="#"
            target="_blank"
            onClick={() => {
              navigate("/participant/resume");
            }}
          >
            <img
              className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32"
              src="https://swiperjs.com/images/projects/atropos.svg"
              alt="Atropos"
            />
            <div>
              <div className="font-bold text-2xl text-black sm:mt-4 sm:mb-2">
                Hacker
              </div>
              <div className="text-sm opacity-75">
                Take part in coding challenges, build projects, and compete with
                fellow hackers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </RequiresAuth>
  );
}
