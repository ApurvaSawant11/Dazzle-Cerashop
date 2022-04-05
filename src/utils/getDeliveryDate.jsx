// generate random delivery date for products on Checkout

const getDeliveryDate = () => {
  const today = new Date(Date.now());
  return new Date(
    today.getYear() + 1900,
    today.getMonth(),
    today.getDate() + Math.random() * 10
  ).toDateString();
};

export { getDeliveryDate };
