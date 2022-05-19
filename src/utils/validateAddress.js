export const validateAddress = (addressForm) => {
  for (let key of Object.keys(addressForm)) {
    if (key === "mobile" && !addressForm[key].match("[0-9]{10}")) {
      return key;
    } else if (key === "zipCode" && !addressForm[key].match("[0-9]{6}")) {
      return key;
    } else if (addressForm[key].trim() === "") {
      return key;
    }
  }
  return "valid";
};
