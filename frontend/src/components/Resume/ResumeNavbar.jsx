import Logo from "../../../public/rjdp_profile_picture.jpg";
import { Disclosure } from "@headlessui/react";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const ResumeNavbar = () => {

  useGSAP(() => {
    gsap.from(".logoutbtn", {
      duration: 1,
      opacity: 0,
      y: 6,
      ease: "power2.out",
      stagger: 0.2,
    });
  });

  const navigate = useNavigate();
  const Logout = async () => {
    try {
      const res = await axiosInstance.get("/auth/logout");
      console.log(res);
      if (res.status === 200) navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Disclosure
      as="nav"
      className="bg-white fixed left-0 right-0 top-0 z-20 shadow-sm"
    >
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between ml-2 px-2">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex justify-between gap-5 px-3 mr-9 shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
              <h1 className="font-bold">Hack Star</h1>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              class="logoutbtn focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-7 py-2.5 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 shadow-sm"
              onClick={Logout}
            >
              <p className="font-bold">Logout</p>
            </button>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default ResumeNavbar;
