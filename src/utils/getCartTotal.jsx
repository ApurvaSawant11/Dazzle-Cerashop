const getCartTotal = (cartList) => {
  return cartList.reduce(
    ({ cartTotal, offerDiscount, quantity }, item) => {
      cartTotal += item.price.original * item.qty;
      offerDiscount += (item.price.original - item.price.discounted) * item.qty;
      quantity += item.qty;
      return { cartTotal, offerDiscount, quantity };
    },
    {
      cartTotal: 0,
      offerDiscount: 0,
      quantity: 0,
    }
  );
};

export { getCartTotal };
