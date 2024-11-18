type MonthType = { [index: string]: string };

const months: MonthType = {
  "01": "jan",
  "02": "feb",
  "03": "mar",
  "04": "apr",
  "05": "may",
  "06": "jun",
  "07": "jul",
  "08": "aug",
  "09": "sep",
  "10": "oct",
  "11": "nov",
  "12": "dec",
};

const formatDate = (date: string) => {
  let splittedDate = date.split("");

  let day = splittedDate[8] + splittedDate[9];
  let year =
    splittedDate[0] + splittedDate[1] + splittedDate[2] + splittedDate[3];

  let month: string = splittedDate[5] + splittedDate[6];

  let value: string = "";
  Object.keys(months).forEach((key) => {
    if (key === month) {
      value = ` ${day} ${months[month]} ${year} `;
    }
  });
  console.log(value);

  return value;
};

export default formatDate;
