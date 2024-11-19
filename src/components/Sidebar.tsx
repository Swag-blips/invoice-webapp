import logo from "/assets/logo.svg";
import moon from "/assets/icon-moon.svg";
import avatar from "/assets/image-avatar.jpg";

const Sidebar = () => {
  return (
    <aside className="h-screen w-[103px] bg-draft-status  z-50 hidden lg:flex lg:fixed flex-col justify-between  rounded-r-[20px]">
      <div className="bg-[#7C5DFA] z-50 h-[103px] relative overflow-clip flex flex-col items-center justify-center rounded-r-[20px] ">
        <figure className=" flex z-50 items-center justify-center ">
          <img src={logo} alt="logo" />
        </figure>
        <div className="bg-[#9277FF] w-full  h-[103px] rounded-l-[20px] absolute translate-y-12 " />
      </div>

      <div className="flex flex-col gap-6 items-center justify-end mb-[24px] ">
        <img src={moon} alt="moon-image" />
        <hr className="border-t-2 w-full border-[#494E6E]" />
        <img src={avatar} alt="avatar" className="h-10 w-10 rounded-full" />
      </div>
    </aside>
  );
};

export default Sidebar;
