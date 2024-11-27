import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center mt-[50px]">
      <Loader className="size-6 text-[#4b2ec0] animate-spin" />
    </div>
  );
};

export default Loading;
