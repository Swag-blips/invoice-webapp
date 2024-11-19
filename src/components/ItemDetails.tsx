import { Items } from "../types/index";
type Props = {
  items?: Items[];
  total?: number;
};

const ItemDetails = ({ items, total }: Props) => {
  return (
    <>
      <div className="w-full rounded-r-[8px] rounded-l-[8px] mt-12 p-8 bg-[#F9FAFE]">
        <div className="md:grid md:grid-cols-2 flex items-center justify-between">
          <div className=" flex flex-col gap-6 md:gap-8">
            <p className="text-primary-text hidden md:block">Item Name</p>

            {items?.map((item) => (
              <div className="flex flex-col gap-2">
                <p
                  key={item.name}
                  className="text-[#0C0E16] font-bold text-[15px]"
                >
                  {item.name}
                </p>
                <p className="font-bold md:hidden text-primary-text text-[15px]">
                  {item.quantity} x £ {item.price}
                </p>
              </div>
            ))}
          </div>
          <div className="flex md:justify-between justify-end">
            <div className=" hidden md:flex flex-col items-center gap-8">
              <h1 className="text-[16px] text-primary-text font-medium tracking=[-0.1px] text-left">
                Qty
              </h1>

              {items?.map((item) => (
                <p
                  key={item.name}
                  className="font-bold text-[15px] text-primary-text tracking-[-0.25px] text-left"
                >
                  {item.quantity}
                </p>
              ))}
            </div>
            <div className=" flex flex-col items-center justify-center gap-6 md:gap-8">
              <h1 className="text-[16px] hidden md:inline text-primary-text font-medium tracking=[-0.1px] text-left">
                Price
              </h1>

              {items?.map((item) => (
                <p
                  key={item.name}
                  className="font-bold  text-[15px] text-primary-text tracking-[-0.25px] text-right"
                >
                  £ {item.price}
                </p>
              ))}
            </div>
            <div className=" hidden md:flex flex-col items-center gap-8">
              <h1 className="text-[16px] text-primary-text font-medium tracking=[-0.1px] text-right">
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
        <p className="text-white hidden md:inline">Amount Due</p>
        <p className="text-white md:hidden">Grand total</p>
        <p className="text-white font-bold text-2xl tracking-[-0.5px] text-right">
          £ {total}
        </p>
      </div>
    </>
  );
};

export default ItemDetails;
