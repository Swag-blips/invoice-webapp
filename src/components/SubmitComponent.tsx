const SubmitComponent = () => {
  return (
    <div className="flex md:hidden bg-white px-6 ml-[-24px]  justify-center h-[90px] mt-14 items-center gap-2">
      <button className="h-12 px-6 rounded-[24px] bg-[#F9FAFE] font-bold tracking-[-0.25px] text-[#7E88C3]">
        Edit
      </button>
      <button className="h-12 px-6 rounded-[24px]  font-bold tracking-[-0.25px]  bg-[#EC5757] text-white">
        Delete
      </button>
      <button className="bg-[#7C5DFA] h-12 px-6 rounded-[24px] font-bold tracking-[-0.25px]  text-white ">
        Mark as paid
      </button>
    </div>
  );
};

export default SubmitComponent;
