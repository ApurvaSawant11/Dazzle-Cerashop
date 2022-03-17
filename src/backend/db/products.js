import { v4 as uuid } from "uuid";

import { comboSet2, comboSet3, comboSet4, fancyBowls } from "../../assets";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Micheilin Set of 7 Plates",
    price: {
      discounted: "499",
      original: "999"
    },
    rating:"4",
    img: {
      alt:"product alt",
      url:comboSet3
    },
    categoryName: "combo-offers",
    isWishlisted:true,
    isInCart: false,
    isBestseller: true,
  },
  {
    _id: uuid(),
    title: "Valiant Set of 6 Plates",
    price: {
      discounted: "499",
      original: "999"
    },
    rating:"4",
    img: {
      alt:"product alt",
      url:comboSet4
    },
    categoryName: "combo-offers",
    isWishlisted:true,
    isInCart: false,
    isBestseller: false,
  },
  {
    _id: uuid(),
    title: "Bolton Planters",
    price: {
      discounted: "499",
      original: "999"
    },
    rating:"4",
    img: {
      alt:"product alt",
      url:comboSet2
    },
    categoryName: "combo-offers",
    isWishlisted:false,
    isInCart: false,
    isBestseller: true,
  },
  {
    _id: uuid(),
    title: "Taisia Bowls Set of 3",
    price: {
      discounted: "499",
      original: "999"
    },
    rating:"4",
    img: {
      alt:"product alt",
      url:fancyBowls
    },
    categoryName: "combo-offers",
    isWishlisted:false,
    isInCart: false,
    isBestseller: false,
  },
];
