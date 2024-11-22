import useReceiptStore from "../../store/receiptStore";

const Overlay = () => {
  const { setIsOpen } = useReceiptStore();
  return (
    <div
      onClick={setIsOpen}
      className="bg-[#000000] opacity-[49.84%] dark:opacity-[49.93%] h-screen absolute top-0 left-0 right-0"
    ></div>
  );
};

export default Overlay;
