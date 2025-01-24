import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./axiosInstance";
import Loading from "./Loading";

function RequiresAuth({ children }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // To handle loading state

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await axiosInstance.get("/verify");
        console.log(res.status);
        setIsLoading(false); // If the user is authenticated, stop loading
      } catch (error) {
        console.error(error);
        try {
          const res = await axiosInstance.post("/auth/jwtRefresh");
          console.log(res.status);
          setIsLoading(false); // If refresh is successful, stop loading
        } catch (error) {
          console.error("Access and Refresh missing : ", error);
          setIsLoading(false);
          navigate("/login"); // Redirect to login if not authenticated
        }
      }
    };
    checkHealth();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen gap-20 text-2xl flex-col">
        <Loading />
        <h1>Loading ...</h1>
      </div>
    );
  }

  return children;
  // return <Loading value="Getting Things ready" />;
}

export default RequiresAuth;
