import useReceiptStore from "../../store/receiptStore";

const Overlay = () => {
  const { isOpen, setIsOpen } = useReceiptStore();
  return (
    <div
      onClick={setIsOpen}
      className={`bg-[#000000] ${
        isOpen ? "overflow-hidden" : ""
      } opacity-[49.84%] dark:opacity-[49.93%] hidden md:block overflow-y-auto h-screen absolute top-0 left-0 right-0`}
    ></div>
  );
};

export default Overlay;
