import logo from "/assets/logo.svg";
import moon from "/assets/icon-moon.svg";
import avatar from "/assets/image-avatar.jpg";

const Navbar = () => {
  return (
    <div className="lg:hidden w-full sticky flex items-center justify-between h-[72px] bg-draft-status">
      <div className="bg-[#7C5DFA] w-[72px] z-50 h-[72px] relative overflow-clip flex flex-col items-center justify-center rounded-r-[20px] ">
        <figure className=" flex z-50 items-center justify-center ">
          <img src={logo} alt="logo" />
        </figure>
        <div className="bg-[#9277FF] w-full  h-[72px] rounded-l-[20px] absolute translate-y-10 " />
      </div>
      <div className="flex gap-6 items-center justify-center mr-6  ">
        <img src={moon} alt="moon-image" />
        <div className=" border  h-[72px] border-[#494E6E]" />
        <img src={avatar} alt="avatar" className="h-10 w-10 rounded-full" />
      </div>
    </div>
  );
};

export default Navbar;
