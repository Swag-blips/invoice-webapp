import { SignIn as SignInComponent } from "@clerk/clerk-react";
import { Loader } from "lucide-react";

const SignIn = () => {

    
  return (
    <div className="flex font-sans items-center justify-center h-screen">
      <SignInComponent
        path="/sign-in"
        forceRedirectUrl={"/"}
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
