import useReceiptStore from "../../store/receiptStore";

const Overlay = () => {
  const { isOpen, setIsOpen } = useReceiptStore();

  const handleSwitch = () => {
    if (isOpen) {
      setIsOpen();
    } else {
      return;
    }
  };
  return (
    <div
      onClick={handleSwitch}
      className={`bg-[#000000] opacity-[49.84%] dark:opacity-[49.93%] hidden md:block overflow-y-auto fixed h-[100%] top-0 left-0 right-0`}
    ></div>
  );
};

export default Overlay;
