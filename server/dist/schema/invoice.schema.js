"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
let invoiceSchema = (0, yup_1.object)({
    senderStreetAddress: (0, yup_1.string)().required("sender street address is required"),
    senderCity: (0, yup_1.string)().required("sender city is required"),
    senderPostCode: (0, yup_1.string)().required("sender post code is required"),
    senderCountry: (0, yup_1.string)().required("sender country is required"),
    clientName: (0, yup_1.string)().required("Client's name is required"),
    clientEmail: (0, yup_1.string)()
        .email("email is required")
        .required("client email is required"),
    clientStreetAddress: (0, yup_1.string)().required("client street address is required"),
    clientCity: (0, yup_1.string)().required("client city is required"),
    clientPostCode: (0, yup_1.string)().required("client post code is required"),
    clientCountry: (0, yup_1.string)().required("client country is required"),
    projectDescription: (0, yup_1.string)().required("Project description is required"),
    startDate: (0, yup_1.string)().required("invoice date is required"),
    selectedOption: (0, yup_1.string)().required("invoice option is required"),
    itemFields: (0, yup_1.array)().required("items are required"),
});
exports.default = invoiceSchema;
