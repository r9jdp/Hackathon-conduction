import { useGoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useContext, useState } from "react";
import axiosInstance from "../../utils/axiosInstance"; // Adjust the import path of axiosInstance
import { useNavigate } from "react-router-dom";
import { userContextIndividual } from "../../contexts/IndividualContext";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();
  const { userLoginDetails, setUserLoginDetails } = useContext(
    userContextIndividual
  );

  // Google authentication function
  const googleAuth = async (code) => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.post("/auth/google-auth", {
        code: code,
      });

      console.log("Data from Google login:", data);

      // Success handling after login
      setUserLoginDetails({
        loginData: await data.userDetails,
      });

      if (data.existingIndividualUser) {
        Navigate("/Individual/Dashboard");
      } else if (data.existingOrganisationUser) {
        Navigate("/Organisations/Dashboard");
      } else {
        Navigate("/userChoice");
      }
      console.log("User login details:", data.userDetails);
    } catch (error) {
      console.error("Google authentication error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Google login response handler
  const responseGoogle = async (response) => {
    if (!response.code) {
      console.error("Google login failed");
      return;
    }

    // Call googleAuth to send the code to the server
    googleAuth(response.code);
  };

  // Use Google Login hook
  const LoginClick = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-background to-muted/50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-6 pb-8">
          {/* Logo */}
          <div className="mx-auto w-12 h-12 relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
            <div className="relative w-full h-full bg-card border rounded-full flex items-center justify-center">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                HS
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold">
              Welcome to Hack Star
            </CardTitle>
            <CardDescription>
              Sign in to continue to your dashboard
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Google Sign In Button */}
          <div className="">
            <button
              type="button"
              className="py-2 px-4 flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              onClick={LoginClick}
              disabled={loading} // Disable the button when loading
            >
              {loading ? (
                <svg
                  className="animate-spin mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    fill="none"
                    d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                </svg>
              )}
              Sign in with Google
            </button>
          </div>

          {/* Terms & Privacy Links */}
          <div className="text-center text-sm text-muted-foreground">
            By continuing, you agree to our{" "}
            <a
              href="#"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
