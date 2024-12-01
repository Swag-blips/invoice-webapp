import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/home/Navbar";
import arrowLeft from "/assets/icon-arrow-left.svg";
import InvoiceButtons from "../../components/Invoice-form/InvoiceButtons";
import BillFrom from "../../components/Invoice-form/BillFrom";
import { useEffect, useState } from "react";
import { FormErrors, FormType, ItemFields } from "../../types";
import BillTo from "../../components/Invoice-form/BillTo";
import InvoiceDate from "../../components/Invoice-form/InvoiceDate";
import ProjectDescription from "../../components/Invoice-form/ProjectDescription";
import ItemList from "../../components/Invoice-form/ItemList";
import { handleValidator } from "../../utils/validateInput";
import {
  useCreateInvoice,
  useEditInvoice,
  useSaveAsDraft,
} from "../../hooks/useMutateInvoice";
import { useMediaQuery } from "react-responsive";
import Loading from "../../helpers/Loading";
import EditButtons from "../../components/Invoice-form/EditButtons";
import { useFetchInvoice } from "../../hooks/useQueryInvoice";
import Empty from "../../components/home/Empty";
import useReceiptStore from "../../store/receiptStore";

const CreateInvoice = () => {
  const [form, setForm] = useState<FormType>({
    senderStreetAddress: "",
    senderCity: "",
    senderPostCode: "",
    senderCountry: "",
    clientName: "",
    clientEmail: "",
    clientStreetAddress: "",
    clientCity: "",
    clientPostCode: "",
    clientCountry: "",
    projectDescription: "",
  });
  const [itemFields, setItemFields] = useState<ItemFields[]>([
    {
      itemName: "",
      qty: 0,
      price: 0,
      total: 0,
    },
  ]);
  const [itemFieldsError, setItemFieldsError] = useState([{}]);
  const [errors, setErrors] = useState<FormErrors | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    "Net 30 Days"
  );
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [isSubmitted, setIsubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    data: invoice,
    isLoading,
    isRefetching,
    isError,
  } = useFetchInvoice(id);

  const isLargerThanMedium = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const handleRedirect = () => {
    setLoading(true);
    try {
      if (isLargerThanMedium) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const data = [...itemFields];
    data[index][event.target.name] = event.target.value;
    if (data[index][event.target.name]) {
      data[index].total = (data[index].qty || 0) * (data[index].price || 0);
    }

    setItemFields(data);
  };

  const addFields = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newField = { itemName: "", qty: 0, price: 0, total: 0 };
    setIsubmitted(false);
    setItemFields([...itemFields, newField]);
  };
  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const removeFields = (index: number) => {
    if (index === 0) return;
    setItemFields((prevInput) => prevInput.filter((_, indx) => indx !== index));
  };
  const handleSelectedOption = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    return;
  };

  const toggle = () => {
    setIsOpen(!isOpen);
    return;
  };

  const { isOpen: isFormOpen, setIsOpen: setIsFormOpen } = useReceiptStore();

  const { mutateAsync: createInvoice, isPending } = useCreateInvoice(
    form,
    selectedOption,
    startDate,
    itemFields
  );

  const { mutateAsync: editInvoice, isPending: isEditing } = useEditInvoice(
    invoice?.invoiceId,
    form,
    selectedOption,
    startDate,
    itemFields
  );

  const { mutate: saveAsDraft, isPending: isSaving } = useSaveAsDraft(
    form,
    selectedOption,
    startDate,
    itemFields
  );

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      handleValidator(
        itemFields,
        setItemFieldsError,
        form,
        setErrors,
        startDate,
        selectedOption
      )
    ) {
     const invoice = await createInvoice();

     if(invoice){
      navigate("/")
     }
    }
    return;
  };

  const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      if (
        handleValidator(
          itemFields,
          setItemFieldsError,
          form,
          setErrors,
          startDate,
          selectedOption
        )
      ) {
        const invoice = await editInvoice();

        if (invoice) {
          navigate("/");
        }
      } else {
        return;
      }
    } catch (error) {
      console.error(error);
    }

    return;
  };

  useEffect(() => {
    handleRedirect();
  }, [isLargerThanMedium]);

  useEffect(() => {
    if (id && invoice) {
      setForm({
        senderStreetAddress: invoice.senderStreetAddress,
        senderCity: invoice.senderCity,
        senderPostCode: invoice.senderPostCode,
        senderCountry: invoice.senderCountry,
        clientName: invoice.clientName,
        clientEmail: invoice.clientEmail,
        clientStreetAddress: invoice.clientStreetAddress,
        clientCity: invoice.clientCity,
        clientPostCode: invoice.clientPostCode,
        clientCountry: invoice.clientCountry,
        projectDescription: invoice.projectDescription,
      });

      setStartDate(invoice.startDate);
      setSelectedOption(invoice.selectedOption);
      setItemFields(invoice.itemFields);
    }
  }, [id, invoice]);

  useEffect(() => {
    if (id && isError) {

      navigate("/");
    }
  }, [id]);

  if (loading || isLoading || isRefetching) {
    return <Loading />;
  }

  if (id && isError) {
    return <Empty />;
  }

  const handleSaveAsDraft = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    saveAsDraft();
    if (isFormOpen) {
      setIsFormOpen();
    }
  };

  return (
    <>
      <Navbar />
      <main className="px-6">
        <div className="flex items-center gap-6 mt-[32px]">
          <img src={arrowLeft} alt="arrow-left" className="object-contain" />
          <Link
            to={"/"}
            className="text-neutral dark:text-white text-base font-bold"
          >
            Go back
          </Link>
        </div>
        <h2 className="text-neutral dark:text-white mt-8 font-bold text-2xl">
          New Invoice
        </h2>

        <form className="mt-6">
          <BillFrom
            form={form}
            handleFormInputChange={handleFormInputChange}
            errors={errors}
          />

          <h2 className="text-base font-bold mt-10 text-[#7C5DFA] mb-6">
            Bill To
          </h2>
          <BillTo
            handleFormInputChange={handleFormInputChange}
            errors={errors}
            form={form}
          />
          <div className="flex flex-col gap-6 ">
            <InvoiceDate
              toggle={toggle}
              handleSelectedOption={handleSelectedOption}
              selectedOption={selectedOption}
              startDate={startDate}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              setStartDate={setStartDate}
            />
            <ProjectDescription
              errors={errors}
              handleFormInputChange={handleFormInputChange}
              projectDescription={form.projectDescription}
            />
          </div>
          <div className="mt-10">
            <h1 className="text-[#777F98] font-bold text-[18px]">Item List</h1>
            <ItemList
              isSubmitted={isSubmitted}
              handleFormChange={handleFormChange}
              removeFields={removeFields}
              itemFields={itemFields}
              itemFieldsError={itemFieldsError}
            />
            <div className="mt-6 gap-4">
              <button
                onClick={addFields}
                className="w-full mt-12 dark:bg-[#252945] rounded-3xl font-bold  h-12 bg-[#F9FAFE] text-[#7E88C3]"
              >
                + Add new item
              </button>
            </div>
          </div>
        </form>
      </main>
      {!id && (
        <InvoiceButtons
          handleSaveAsDraft={handleSaveAsDraft}
          isSaving={isSaving}
          isPending={isPending}
          handleSubmit={handleSubmit}
        />
      )}
      {id && <EditButtons isEditing={isEditing} handleEdit={handleEdit} />}
    </>
  );
};

export default CreateInvoice;
