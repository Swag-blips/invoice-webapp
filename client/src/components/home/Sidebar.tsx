import logo from "/assets/logo.svg";
import moon from "/assets/icon-moon.svg";

import sun from "/assets/icon-sun.svg";
import { useTheme } from "../../context/ThemeProvider";
import useReceiptStore from "../../store/receiptStore";
import { UserButton } from "@clerk/clerk-react";

const Sidebar = () => {
  const { theme, handleThemeSwitch } = useTheme();
  const { isOpen } = useReceiptStore();

  return (
    <aside
      className="h-screen w-[103px] bg-draft-status fixed z-50 hidden lg:flex  
    
      flex-col justify-between  rounded-r-[20px]"
    >
      <div className="bg-[#7C5DFA] z-50 h-[103px] relative overflow-clip flex flex-col items-center justify-center rounded-r-[20px] ">
        <figure className=" flex z-50 items-center justify-center ">
          <img src={logo} alt="logo" />
        </figure>
        <div className="bg-[#9277FF] w-full  h-[103px] rounded-l-[20px] absolute translate-y-12 " />
      </div>

      <div className="flex flex-col gap-6 items-center justify-end mb-[24px] ">
        {theme === "light" ? (
          <img onClick={handleThemeSwitch} src={moon} alt="moon-image" />
        ) : (
          <img onClick={handleThemeSwitch} src={sun} alt="sun-image" />
        )}
        <hr className="border-t-2 w-full border-[#494E6E]" />
        <UserButton />
      </div>
    </aside>
  );
};

export default Sidebar;
