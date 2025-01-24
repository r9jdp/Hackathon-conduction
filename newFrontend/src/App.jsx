import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Router";

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={routes} />;
}

export default App;
