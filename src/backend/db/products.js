import { blueCup, comboSet2, comboSet3, comboSet4, donutPlate, fancyBowls, fancyCup, jugPlanter, whiteBrownPlanter, whiteGoldPlate } from "../../assets";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "6ba388d3-e662-4a56-9d47-cfdab4788299",
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
    _id: "0bed5f7a-285e-4fc4-ad8a-2191576ebe02",
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
    _id: "483aae0d-c2ff-499d-9ab4-4b7b622e610d",
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
    _id: "3b799232-cde3-4c22-9248-509b15539547",
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
    _id: "9b44b7e1-b94c-4e84-a131-11c608170261",
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
    _id: "0c3f12ae-60ed-4fa9-a968-3210e8ea2399",
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
    _id: "319d3e92-47a3-49f3-9c89-d10d0668e5e2",
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
    _id: "eec0dfda-a573-4f98-8c39-b5fb1fe21fec",
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
    _id: "58027fcf-1854-449b-9607-27ceefe049d1",
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
    _id: "5d4079e3-5467-4012-9d58-596887022259",
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
