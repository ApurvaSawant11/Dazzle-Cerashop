export const validateAddress = (addressForm) => {
  for (let key of Object.keys(addressForm)) {
    if (key === "mobile" && !addressForm[key].match("/^d{10}$/")) {
      return key;
    } else if (
      key === "zipCode" &&
      !addressForm[key].match("/(^d{5}$)|(^d{5}-d{4}$)/")
    ) {
      return key;
    } else if (addressForm[key].trim() === "") {
      return key;
    }
  }
  return "valid";
};
