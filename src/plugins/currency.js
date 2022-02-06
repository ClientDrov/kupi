export const currency = () => {
  switch (localStorage.getItem("currency")) {
    case "0":
    case "1":
      return "€";
    case "2":
    case "3":
    case "4":
      return "$";
  }
};
