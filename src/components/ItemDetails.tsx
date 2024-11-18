import { Items } from "../types/index";
type Props = {
  items?: Items[];
  total?: number;
};

const ItemDetails = ({ items, total }: Props) => {
  return (
    <>
      <div className="w-full rounded-r-[8px] rounded-l-[8px] mt-12 p-8 bg-[#F9FAFE]">
        <div className="grid grid-cols-2">
          <div className=" flex flex-col gap-8">
            <p className="text-[#7E88C3]">Item Name</p>

            {items?.map((item) => (
              <p
                key={item.name}
                className="text-[#0C0E16] font-bold text-[15px]"
              >
                {item.name}
              </p>
            ))}
          </div>
          <div className="flex justify-between">
            <div className=" flex flex-col items-center gap-8">
              <h1 className="text-[16px] text-[#7E88C3] font-medium tracking=[-0.1px] text-left">
                Qty
              </h1>

              {items?.map((item) => (
                <p
                  key={item.name}
                  className="font-bold text-[15px] text-[#7E88C3] tracking-[-0.25px] text-left"
                >
                  {item.quantity}
                </p>
              ))}
            </div>
            <div className=" flex flex-col items-center gap-8">
              <h1 className="text-[16px] text-[#7E88C3] font-medium tracking=[-0.1px] text-left">
                Price
              </h1>

              {items?.map((item) => (
                <p
                  key={item.name}
                  className="font-bold  text-[15px] text-[#7E88C3] tracking-[-0.25px] text-right"
                >
                  £ {item.price}
                </p>
              ))}
            </div>
            <div className=" flex flex-col items-center gap-8">
              <h1 className="text-[16px] text-[#7E88C3] font-medium tracking=[-0.1px] text-right">
                Total
              </h1>

              {items?.map((item) => (
                <p
                  key={item.name}
                  className="font-bold text-[15px] text-[#0C0E16] tracking-[-0.25px] text-right"
                >
                  {item.total}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#373B53] flex items-center justify-between w-full p-8 rounded-br-[8px] rounded-bl-[8px]">
        <p className="text-white">Amount Due</p>
        <p className="text-white font-bold text-2xl tracking-[-0.5px] text-right">
          £ {total}
        </p>
      </div>
    </>
  );
};

export default ItemDetails;
