import deleteIcon from "/assets/icon-delete.svg";
import { ItemFields } from "../../types";

type Props = {
  itemFields: ItemFields[];
  itemFieldsError: any;
  isSubmitted: boolean;
  handleFormChange: (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  removeFields: (index: number) => void;
};

interface KeyboardEvent {
  code: string;
  preventDefault: () => void;
}
const ItemList = ({
  itemFields,

  itemFieldsError,
  removeFields,
  handleFormChange,
}: Props) => {
  const preventMinus = (e: KeyboardEvent) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };
  return (
    <>
      {itemFields.map((input, index) => (
        <div
          key={index}
          className="grid gap-6 mt-10 md:mt-4 mb-4 grid-cols-1 md:grid-cols-2"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="itemName" className="label-text">
              Item Name
            </label>
            <input
              className={`
                ${
                  itemFieldsError[index]?.itemNameCheck
                    ? "error-invoice-input-style dark:text-white"
                    : "  invoice-input-style dark:text-white "
                }
              `}
              type="text"
              name="itemName"
              id="itemName"
              value={input.itemName}
              onChange={(event) => handleFormChange(index, event)}
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="qty" className="label-text">
                Qty
              </label>
              <input
                name="qty"
                id="qty"
                type="number"
                pattern="\d*"
                onKeyDown={preventMinus}
                min="0"
                className={` 
                  ${
                    itemFieldsError[index]?.itemQtyCheck
                      ? "error-qty-input-style dark:text-white"
                      : "qty-input-style dark:text-white"
                  }
                  `}
                value={input.qty!}
                onChange={(event) => handleFormChange(index, event)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="price" className="label-text">
                Price
              </label>
              <input
                name="price"
                id="price"
                type="number"
                pattern="\d*"
                min="0"
                onKeyDown={preventMinus}
                className={` 
                  ${
                    itemFieldsError[index]?.itemPriceCheck
                      ? "error-invoice-input-style dark:text-white"
                      : "invoice-input-style"
                  }
                  `}
                value={input.price!}
                onChange={(event) => handleFormChange(index, event)}
              />
            </div>

            <div>
              <label htmlFor="total" className="label-text">
                Total
              </label>
              <input
                name="total"
                id="total"
                pattern="\d*"
                className="font-bold text-[#888EB0] dark:text-white bg-transparent w-full outline-none h-12 "
                value={input.total!}
                onChange={(event) => handleFormChange(index, event)}
                readOnly
              />
            </div>

            <img
              id="delete"
              className="mt-4 hover:text-error cursor-pointer"
              src={deleteIcon}
              alt="garbage-image"
              onClick={() => removeFields(index)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
