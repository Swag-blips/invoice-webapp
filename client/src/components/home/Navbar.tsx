import logo from "/assets/logo.svg";
import moon from "/assets/icon-moon.svg";
import { useTheme } from "../../context/ThemeProvider";
import sun from "/assets/icon-sun.svg";
import { UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { theme, handleThemeSwitch } = useTheme();
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/");
  };
  return (
    <div className="lg:hidden w-full z-[120] overflow-x-hidden sticky top-0 flex items-center justify-between h-[72px] bg-draft-status">
      <div className="bg-[#7C5DFA] w-[72px] z-50 h-[72px] relative overflow-clip flex flex-col items-center justify-center rounded-r-[20px] ">
        <figure
          onClick={handleRedirect}
          className=" flex z-50 items-center justify-center "
        >
          <img src={logo} alt="logo" />
        </figure>
        <div className="bg-[#9277FF] w-full  h-[72px] rounded-l-[20px] absolute translate-y-10 " />
      </div>
      <div className="flex gap-6 items-center justify-center mr-6  ">
        {theme === "light" ? (
          <img onClick={handleThemeSwitch} src={moon} alt="moon-image" />
        ) : (
          <img onClick={handleThemeSwitch} src={sun} alt="sun-image" />
        )}
        <div className=" border  h-[72px] border-[#494E6E]" />
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
