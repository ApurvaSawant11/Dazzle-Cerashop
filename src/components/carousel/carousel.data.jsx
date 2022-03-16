import { v4 as uuid } from "uuid";

import carousel_1 from "../../assets/images/carousel-1.jpg";
import carousel_3 from "../../assets/images/carousel-3.jpg";
import carousel_4 from "../../assets/images/carousel-4.jpg";
import carousel_5 from "../../assets/images/carousel-5.jpg";
const CarouselData = [
  {
    id: uuid(),
    src: carousel_3,
    alt: "products",
  },
  {
    id: uuid(),
    src: carousel_4,
    alt: "products",
  },
  {
    id: uuid(),
    src: carousel_5,
    alt: "products",
  },
  {
    id: uuid(),
    src: carousel_1,
    alt: "products",
  },
];

export { CarouselData };
