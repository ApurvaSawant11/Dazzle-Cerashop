const getCartTotal = (cartList) => {
  return cartList.reduce(
    ({ cartTotal, couponDiscount, quantity }, item) => {
      cartTotal += item.price.discounted * item.qty;
      quantity += item.qty;
      return { cartTotal, couponDiscount, quantity };
    },
    {
      cartTotal: 0,
      couponDiscount: 0,
      quantity: 0,
    }
  );
};

export { getCartTotal };
