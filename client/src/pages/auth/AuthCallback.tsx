import { useAuth, useUser } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();
  const syncAttempted = useRef(false);
  const { userId, isLoaded } = useAuth();
  const { user } = useUser();
  const API_URL = import.meta.env.VITE_API_URL;

  const saveUserDetails = async () => {
    try {
      const response = await fetch(`${API_URL}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clerkId: userId,
          email: user?.primaryEmailAddress?.emailAddress,
        }),
      });

      await response.json();
      syncAttempted.current = true;
      navigate("/");
    } catch (error: any) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    if (!userId || !isLoaded || syncAttempted.current) return;

    saveUserDetails();
  }, [user, isLoaded]);
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-6 text-[#4b2ec0] animate-spin" />
    </div>
  );
};

export default AuthCallback;
