import { SignIn as SignInComponent, useAuth } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  const redirect_url = import.meta.env.VITE_REDIRECT_URL;

  useEffect(() => {

    if (isLoaded && userId) {
      navigate("/");
    }
  }, [isLoaded]);

  if (!isLoaded)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-6 text-[#4b2ec0] animate-spin" />
      </div>
    );

  return (
    <div className="flex font-sans items-center justify-center h-screen">
      <SignInComponent
        path="/sign-in"
        forceRedirectUrl={redirect_url}
        appearance={{
          elements: {
            footerAction: { display: "none" },
          },
        }}
      />
    </div>
  );
};

export default SignIn;
