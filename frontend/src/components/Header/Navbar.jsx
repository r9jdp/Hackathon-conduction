import { Disclosure } from "@headlessui/react";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  useGSAP(() => {
    gsap.from(".ani", {
      duration: 0.8,
      x: 30,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.inOut",
    });
    gsap.from(".lgtoutani",{
      duration: 1.1,
      scale: 0.8,
      opacity: 0,
      ease: "power2.inOut",
      delay: 0.2,
    })
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
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="ani flex justify-between gap-5 px-3 mr-9 shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
              <h1>Hack Star</h1>
            </div>
            <div className="ani hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <form class="w-96 mx-auto">
                  <label
                    for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                      placeholder="Search Mockups, Logos..."
                      required
                    />
                    <button
                      type="submit"
                      class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="lgtoutani absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
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

export default Navbar;

// <nav class="bg-white border-b border-gray-200 px-4 py-2.5  fixed left-0 right-0 top-0 z-50">
//   <div class="flex justify-between items-center">
//     <div class="flex justify-start items-center">
//       <a
//         href="/"
//         class="flex items-center justify-evenly mr-20 px-9 border border-red-700"
//       >
//         <img
//           src={Logo}
//           class="mr-3 h-8 rounded-full"
//           alt="Hack Star Logo"
//         />
//         <span class="self-center text-2xl font-semibold whitespace-nowrap">
//           Hack Star
//         </span>
//       </a>
//       <div className="flex justify-between border border-red-700  w-full">
//         <form action="#" method="GET" class="hidden md:block md:pl-2">
//           <label for="topbar-search" class="sr-only">
//             Search
//           </label>
//           <div class="relative md:w-[28rem]">
//             <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//               <svg
//                 class="w-5 h-5 text-gray-500"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                 ></path>
//               </svg>
//             </div>
//             <input
//               type="text"
//               name="email"
//               id="topbar-search"
//               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5 focus:outline-none"
//               placeholder="Search"
//             />
//           </div>
//         </form>

//         <div className="">
//           <div class="relative ml-3">
//             <div>
//               <button
//                 type="button"
//                 class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                 id="user-menu-button"
//                 aria-expanded="false"
//                 aria-haspopup="true"
//               >
//                 <span class="absolute -inset-1.5"></span>
//                 <span class="sr-only">Open user menu</span>
//                 <img
//                   class="size-8 rounded-full"
//                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                   alt=""
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </nav>
