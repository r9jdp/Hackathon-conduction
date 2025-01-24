import React, { useContext } from "react";
import { Menu } from "lucide-react";
import { userContextIndividual } from "../../contexts/IndividualContext";

function MobileNavbarIndividual(props) {
  const { SideBaropen, setSideBaropen } = useContext(userContextIndividual);
  return (
    <div className="lg:hidden bg-[#1e2939] w-full h-16 flex justify-between items-center border-b-[1px] border-b-slate-300">
      <Menu
        onClick={() => setSideBaropen(!SideBaropen)}
        className="text-white size-8 mx-3 cursor-pointer"
      />
    </div>
  );
}

export default MobileNavbarIndividual;
