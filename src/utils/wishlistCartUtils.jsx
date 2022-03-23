const calcPercentage = (discountedPrice, originalPrice) =>
  Math.floor(Math.abs((discountedPrice / originalPrice) * 100 - 100));

const isProductInWishlist = (wishlist, id) =>
  wishlist?.find((product) => product._id === id);

const isProductInCart = (cartList, id) =>
  cartList?.find((product) => product._id === id);

export { calcPercentage, isProductInWishlist, isProductInCart };
