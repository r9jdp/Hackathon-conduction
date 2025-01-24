import { Calendar, Home, Inbox, Search, Settings, User, X } from "lucide-react";
import { useContext, useState } from "react";
import { userContextIndividual } from "../../contexts/IndividualContext";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/Individual/Dashboard",
    icon: Home,
  },
  {
    title: "Profile",
    url: "#",
    icon: User,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  // Correctly using the context
  const { SideBaropen, setSideBaropen } = useContext(userContextIndividual);

  return (
    <>
      {/* bg-[#18181b] border-r-gray-600 */}
      {/* Sidebar */}
      <div
        id="hs-sidebar-offcanvas"
        className={`fixed top-0 left-0 bottom-0 z-[60] bg-[#1e2939] border-r-[1px] border-r-gray-600 transition-transform duration-300 lg:translate-x-0 lg:block w-64 h-full ${
          SideBaropen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        tabIndex="-1"
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col h-full max-h-full">
          {/* Header */}
          <header className="p-3 h-[5.5rem] flex justify-between lg:justify-center items-center gap-x-2">
            <a
              className="text-white flex-none font-semibold text-[1.8rem] lg:text:xl focus:outline-none focus:opacity-80"
              href="#"
              aria-label="Brand"
            >
              Hack Star
            </a>

            <div className="lg:hidden -me-2">
              <div className="p-3" onClick={() => setSideBaropen(false)}>
                <X size={28} className="text-white" />
              </div>
              {/* End Close Button */}
            </div>
          </header>
          {/* End Header */}

          {/* Body */}
          <nav className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <ul className="space-y-1 ml-2">
              {items.map((item) => (
                <li key={item.title}>
                  <a
                    className="flex items-center gap-x-4 py-4 mt-5 px-2.5 text-2xl text-white rounded-lg hover:bg-gray-200 hover:text-black"
                    href={item.url}
                  >
                    <item.icon className="size-7" />
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* End Body */}
        </div>
      </div>
      {/* End Sidebar */}
    </>
  );
}
