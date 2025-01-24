import IndividualProvider from "../../contexts/IndividualContext";
import { AppSidebar } from "../../components/MyComponents/IndividualSideBar";
import MobileNavbarIndividual from "../../components/MyComponents/MobileNavbarIndividual";

export default function IndividualLayout({ children }) {
  return (
    <IndividualProvider>
      <div className="h-screen bg-white w-full flex justify-center items-center">
        <div className="md:w-64">
          <AppSidebar />
        </div>
        <div className="lg:ml-8 w-screen h-screen">
          <MobileNavbarIndividual />
          {children}
        </div>
      </div>
    </IndividualProvider>
  );
}

// bg-[#09090b]