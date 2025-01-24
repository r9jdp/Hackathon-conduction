import React from "react";

function IndividualDashBoard(props) {
  return (
    <div className="w-full h-full">
      <main className="">
        <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
          <div className="flex h-24 items-center gap-4 px-6">
            <h2 className="text-4xl font-semibold">
              Hi! <span className="text-primary">Rajdeep</span>
            </h2>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 h-screen" style={{ backgroundColor: "rgba(0, 110, 255, 0.041)" }}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Add your dashboard cards/content here */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default IndividualDashBoard;
