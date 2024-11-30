import moment from "moment";


const formatDate = (date: Date, selectedOption: string) => {
  if (selectedOption === "Net 30 Days") {
    console.log("here!");
    return moment(date).add(30, "days").format("Do MMMM YYYY");
  } else if (selectedOption === "Net 14 Days") {
    return moment(date).add(14, "days").format("Do MMMM YYYY");
  } else if (selectedOption === "Net 7 Days") {
    return moment(date).add(7, "days").format("Do MMMM YYYY");
  } else if (selectedOption === "Net 1 Day") {
    return moment(date).add(1, "days").format("D MMMM YYY");
  }
};

export default formatDate;
