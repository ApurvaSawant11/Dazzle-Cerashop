const initialOrderState = {
  orderAddress: {},
  priceDetails: {
    cartTotal: 0,
    offerDiscount: 0,
    couponDiscount: 0,
    totalAmt: 0,
    totalDiscount: 0,
  },
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case "PRICE_DETAILS":
      const {
        cartTotal,
        offerDiscount,
        couponDiscount,
        totalAmt,
        totalDiscount,
      } = action.payload;
      return {
        ...state,
        priceDetails: {
          ...action.payload,
          cartTotal,
          offerDiscount,
          couponDiscount,
          totalAmt,
          totalDiscount,
        },
      };

    case "ORDER_ADDRESS":
      return {
        ...state,
        orderAddress: { ...action.payload },
      };

    case "RESET_PRICE":
      return initialOrderState;

    case "default":
      return state;
  }
};

export { initialOrderState, orderReducer };
