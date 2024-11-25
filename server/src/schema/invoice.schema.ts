import { array, date, object, string } from "yup";

let restaurantSchema = object({
  invoiceId: string().required("InvoiceId is required").length(6),
  senderStreetAddress: string().required("sender street address is required"),
  senderCity: string().required("sender city is required"),
  senderPostCode: string().required("sender post code is required"),
  senderCountry: string().required("sender country is required"),
  clientName: string().required("Client's name is required"),
  clientEmail: string()
    .email("email is required")
    .required("client email is required"),
  clientStreetAddress: string().required("client street address is required"),
  clientCity: string().required("client city is required"),
  clientPostCode: string().required("client post code is required"),
  clientCountry: string().required("client country is required"),
  projectDescription: string().required("Project description"),
  startDate: date().required("invoice date is required"),
  selectedOption: string().required("invoice option is required"),
  itemList: array().required("item lists are required"),
});
