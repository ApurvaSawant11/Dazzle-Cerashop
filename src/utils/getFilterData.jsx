export const sortData = (
  productsList,
  sortByHighLow,
  priceRange,
  sortByRating
) => {
  switch (sortByHighLow) {
    case "CLEAR":
      productsList = productsList;
      break;
    case "LOW_TO_HIGH":
      productsList = productsList.sort(
        (a, b) =>
          parseFloat(a.price.discounted) - parseFloat(b.price.discounted)
      );
      break;
    case "HIGH_TO_LOW":
      productsList = productsList.sort(
        (a, b) =>
          parseFloat(b.price.discounted) - parseFloat(a.price.discounted)
      );
      break;
    default:
      productsList = productsList;
  }
  if (sortByRating) {
    productsList = productsList.filter(
      (product) => product.rating >= sortByRating
    );
  }
  if (priceRange) {
    productsList = productsList.filter(
      (product) =>
        product.price.discounted >= priceRange.min &&
        product.price.discounted <= priceRange.max
    );
  }
  return productsList;
};

const unionCategory = (...arr) => {
  const data = arr.reduce((acc, curr) => {
    return acc.concat(
      curr.filter((el) => !acc.some((ele) => ele._id === el._id))
    );
  }, []);
  return data;
};

export const filterByCategory = (productsList, categoriesList) => {
  let filteredProductsList = [];
  let flag = false;
  for (const category in categoriesList) {
    if (categoriesList[category]) {
      flag = true;
      filteredProductsList = unionCategory(
        filteredProductsList,
        productsList.filter((product) => product.categoryName === category)
      );
    }
  }
  return flag ? filteredProductsList : productsList;
};

export const filterByOffers = (productsList) => {
  return productsList.filter((item) => item.offer === "combo-offer");
};
