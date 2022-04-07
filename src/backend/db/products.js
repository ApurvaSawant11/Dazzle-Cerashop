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
    isBestseller: false,
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
    isBestseller: false,
  },
  {
    _id: "319d3e92-47a3-49f3-9c89-d10d0668e5e2",
    title: "Micheil Set of 7 Plates",
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
    title: "Mini Couple Cups",
    price: {
      discounted: 199,
      original: 999
    },
    rating:4,
    imgURL:comboSet2,
    categoryName: "Cups",
    offer:"combo-offer",
    isBestseller: false,
  },
  {
    _id: "8s7079e3-5467-4012-9d58-596887022259",
    title: "Self Design Bowl",
    price: {
      discounted: 99,
      original: 199
    },
    rating:5,
    imgURL:fancyBowls,
    categoryName: "Bowls",
    offer: "combo-offer",
    isBestseller: true,
  },
  {
    _id: "3b799232-cde3-4c22-9245-508b15539547",
    title: "Classic Planter",
    price: {
      discounted: 1359,
      original: 1599
    },
    rating:5,
    imgURL:whiteBrownPlanter,
    categoryName: "Planter",
    offer:"70%",    
    isBestseller: false,
  },
  {
    _id: "9b456541-b94c-4e84-a131-11c608170261",
    title: "Gold Detail Plate",
    price: {
      discounted: 999,
      original: 1599
    },
    rating:5,
    imgURL:whiteGoldPlate,
    categoryName: "Plates",
    offer:"20%",    
    isBestseller: false,
  },
  {
    _id: "0c3f12ae-60ed-4fa9-a968-32133asa2399",
    title: "Black Plate",
    price: {
      discounted: 85,
      original: 199
    },
    rating:3,
    imgURL:donutPlate,
    categoryName: "Planter",
    offer:"20%",    
    isBestseller: true
  },
  {
    _id: "31d3ae92-47a3-49f3-9c89-d10d4s2d85e2",
    title: "Micheil Set of 1",
    price: {
      discounted: 199,
      original: 300
    },
    rating:2,
    imgURL:comboSet3,
    categoryName: "Plates",
    offer: "combo-offer",    
    isBestseller: true,
  },
  {
    _id: "eb83msda-a573-4f98-8c39-b572sdjk1fec",
    title: "Dazzo Set of 6 Plates",
    price: {
      discounted: 1350,
      original: 4000
    },
    rating:5,
    imgURL:comboSet4,
    categoryName: "Plates",
    offer: "combo-offer",    
    isBestseller: true,
  },
  {
    _id: "580a8scf-1854-449b-9607-27ce73bfo5d1",
    title: "Decor Cups",
    price: {
      discounted: 350,
      original: 999
    },
    rating:2,
    imgURL:comboSet2,
    categoryName: "Gifts",
    offer:"combo-offer",
    isBestseller: false,
  },
  {
    _id: "5d48s0e3-5467-4012-9d58-59683bf28259",
    title: "Jane Bowls Set of 3",
    price: {
      discounted: 799,
      original: 999
    },
    rating:5,
    imgURL:fancyBowls,
    categoryName: "Gifts",
    offer: "combo-offer",
    isBestseller: true,
  },

  {
    _id: "6b7sd8d3-e662-4a56-9d47-cfdab28348299",
    title: "Don't fear Cup",
    price: {
      discounted: 899,
      original: 1899
    },
    rating:3,
    imgURL:fancyCup,
    categoryName: "Gifts",
    offer:"50%",    
    isBestseller: false,
  },
  {
    _id: "0balsf7a-285e-4fc4-ad8a-2191asjdmbe02",
    title: "Ecofriendly Planter",
    price: {
      discounted: 95,
      original: 599
    },
    rating:3,
    imgURL:jugPlanter,
    categoryName: "Planters",
    offer:"70%",
    isBestseller: true,
  },
  {
    _id: "4833490d-c2ff-499d-9ab4-4b7b62as9s10d",
    title: "Blue Cup Saucer",
    price: {
      discounted: 250,
      original: 800
    },
    rating:5,
    imgURL:blueCup,
    categoryName: "Cups",
    offer:"70%",
    isBestseller: false,
  },
  {
    _id: "3b79as932-cde3-4c42-9248-509b18a39547",
    title: "CLay Planter",
    price: {
      discounted: 159,
      original: 559
    },
    rating:4,
    imgURL:whiteBrownPlanter,
    categoryName: "Planter",
    offer:"70%",    
    isBestseller: true,
  },
];
