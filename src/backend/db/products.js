import { v4 as uuid } from "uuid";

import { blueCup, comboSet2, comboSet3, comboSet4, donutPlate, fancyBowls, fancyCup, jugPlanter, whiteBrownPlanter, whiteGoldPlate } from "../../assets";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Fancy Cup With Gold",
    price: {
      discounted: 499,
      original: 999
    },
    rating:5,
    imgURL:fancyCup,
    categoryName: "Cups",
    offer:"50%",    
    isBestseller: false,
  },
  {
    _id: uuid(),
    title: "White Jug Planter",
    price: {
      discounted: 299,
      original: 999
    },
    rating:1,
    imgURL:jugPlanter,
    categoryName: "Planters",
    offer:"70%",
    isBestseller: false,
  },
  {
    _id: uuid(),
    title: "Simple Cappuccino Cup",
    price: {
      discounted: 479,
      original: 1599
    },
    rating:2,
    imgURL:blueCup,
    categoryName: "Cups",
    offer:"70%",
    isBestseller: true,
  },
  {
    _id: uuid(),
    title: "White Brown Planter",
    price: {
      discounted: 359,
      original: 1199
    },
    rating:5,
    imgURL:whiteBrownPlanter,
    categoryName: "Planter",
    offer:"70%",    
    isBestseller: true,
  },
  {
    _id: uuid(),
    title: "Gold Detail Plate",
    price: {
      discounted: 479,
      original: 599
    },
    rating:3,
    imgURL:whiteGoldPlate,
    categoryName: "Plates",
    offer:"20%",    
    isBestseller: true,
  },
  {
    _id: uuid(),
    title: "Mini Donut Plate",
    price: {
      discounted: 159,
      original: 199
    },
    rating:4,
    imgURL:donutPlate,
    categoryName: "Planter",
    offer:"20%",    
    isBestseller: true,
  },
  {
    _id: uuid(),
    title: "Micheilin Set of 7 Plates",
    price: {
      discounted: 1499,
      original: 1999
    },
    rating:4,
    imgURL:comboSet3,
    categoryName: "Plates",
    offer: "combo-offer",    
    isBestseller: true,
  },
  {
    _id: uuid(),
    title: "Valiant Set of 6 Plates",
    price: {
      discounted: 2400,
      original: 3000
    },
    rating:3,
    imgURL:comboSet4,
    categoryName: "Plates",
    offer: "combo-offer",    
    isBestseller: false,
  },
  {
    _id: uuid(),
    title: "Bolton Planters",
    price: {
      discounted: 4999,
      original: 5999
    },
    rating:4,
    imgURL:comboSet2,
    categoryName: "Gifts",
    offer:"combo-offer",
    isBestseller: true,
  },
  {
    _id: uuid(),
    title: "Taisia Bowls Set of 3",
    price: {
      discounted: 799,
      original: 999
    },
    rating:4,
    imgURL:fancyBowls,
    categoryName: "Bowls",
    offer: "combo-offer",
    isBestseller: false,
  },
];
