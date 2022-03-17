import { v4 as uuid } from "uuid";

import { blueCup, fancyBowls, donutPlate, gifts, pots } from "../../assets";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Cups",
    img: {
      alt: "category",
      url:blueCup
    }
  },
  {
    _id: uuid(),
    categoryName: "Bowls",
    img: {
      alt: "category",
      url:fancyBowls
    }
  },
  {
    _id: uuid(),
    categoryName: "Plates",
    img: {
      alt: "category",
      url:donutPlate
    }
  },
  {
    _id: uuid(),
    categoryName: "Gifts",
    img: {
      alt: "category",
      url:gifts
    }
  },
  {
    _id: uuid(),
    categoryName: "Planters",
    img: {
      alt: "category",
      url:pots
    }
  },
];
