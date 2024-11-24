import { Loader } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-6 text-[#4b2ec0] animate-spin" />
    </div>
  );
};

export default AuthCallback;
