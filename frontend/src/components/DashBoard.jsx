import { useEffect, useState } from "react";
import RequiresAuth from "../utils/requiresAuth";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Header/Navbar";
import axiosInstance from "../utils/axiosInstance";

const DashBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(async () => {
    const value = await axiosInstance.post("/user/getUser");
    console.log(value.data);
  });

  return (
    <RequiresAuth>
      <div className="flex h-screen overflow-y-hidden scrollbar-hide">
        <Sidebar />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Navbar />

          <main
            class="p-4 md:ml-64 h-auto pt-20"
            style={{ backgroundColor: "rgb(241, 245, 249)" }}
          >

            <div class="border-2 rounded-sm shadow-md bg-white h-96 mb-4"></div>
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div class="border-2 rounded-sm bg-white shadow-md h-48 md:h-72"></div>
              <div class="border-2 rounded-sm bg-white shadow-md h-48 md:h-72"></div>
              <div class="border-2 rounded-sm bg-white shadow-md h-48 md:h-72"></div>
              <div class="border-2 rounded-sm bg-white shadow-md h-48 md:h-72"></div>
            </div>
            <div class="border-2 rounded-sm shadow-md bg-white h-96 mb-4"></div>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-sm bg-white shadow-md h-48 md:h-72"></div>
              <div class="border-2 rounded-sm bg-white shadow-md h-48 md:h-72"></div>
              <div class="border-2 rounded-sm bg-white shadow-md h-48 md:h-72"></div>
              <div class="border-2 rounded-sm bg-white shadow-md h-48 md:h-72"></div>
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
      </div>
      ;
    </RequiresAuth>
  );
};

export default DashBoard;

`<div className="flex h-screen overflow-y-hidden">
  <Sidebar />

  <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
    <Navbar />

    <main
      class="p-4 md:ml-64 h-auto pt-20"
      style={{ backgroundColor: "rgb(241, 245, 249)" }}
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div class="border-2 rounded-sm  shadow-md  bg-white h-32 md:h-64"></div>
        <div class="border-2 rounded-sm  shadow-md  bg-white h-32 md:h-64"></div>
        <div class="border-2 rounded-sm  shadow-md  bg-white h-32 md:h-64"></div>
        <div class="border-2 rounded-sm  shadow-md  bg-white h-32 md:h-64"></div>
        {/* <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 bg-white h-32 md:h-64"></div>
    <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 bg-white h-32 md:h-64"></div>
    <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 bg-white h-32 md:h-64"></div> */}
      </div>
      <div class="border-2 rounded-sm shadow-md bg-white h-96 mb-4"></div>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="border-2 rounded-sm bg-white shadow-md h-48 md:h-72"></div>
        <div class="border-2 rounded-sm bg-white shadow-md h-48 md:h-72"></div>
        <div class="border-2 rounded-sm bg-white shadow-md h-48 md:h-72"></div>
        <div class="border-2 rounded-sm bg-white shadow-md h-48 md:h-72"></div>
        {/* <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 bg-white h-48 md:h-72"></div>
    <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 bg-white h-48 md:h-72"></div>
    <div class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 bg-white h-48 md:h-72"></div> */}
      </div>
      <div class="border-2 rounded-sm shadow-md bg-white h-96 mb-4"></div>
      <div class="grid grid-cols-2 gap-4">
        <div class="border-2 rounded-sm bg-white shadow-md h-48 md:h-72"></div>
        <div class="border-2 rounded-sm bg-white shadow-md h-48 md:h-72"></div>
        <div class="border-2 rounded-sm bg-white shadow-md h-48 md:h-72"></div>
        <div class="border-2 rounded-sm bg-white shadow-md h-48 md:h-72"></div>
      </div>
    </main>
    {/* <!-- ===== Main Content End ===== --> */}
  </div>
</div>;
`;
