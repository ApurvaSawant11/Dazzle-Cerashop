import React, { useState } from "react";

import { CarouselData } from "./carousel.data";

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const length = CarouselData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <div className="carousel-container">
        {CarouselData.map(({ id, src, alt }, index) => (
          <div
            className={
              index === current ? "container display-block" : "container"
            }
            key={id}
          >
            <img className="carousel-img" src={src} alt={alt} />
          </div>
        ))}

        <div className="left" onClick={prevSlide}>
          <i className="fas fa-angle-left text-xl" aria-hidden="true"></i>
        </div>
        <div className="right" onClick={nextSlide}>
          <i className="fas fa-angle-right text-xl" aria-hidden="true"></i>
        </div>
      </div>
      <br />

      <div className="text-center">
        <span className={0 === current ? "dots enable" : "dots"}></span>
        <span className={1 === current ? "dots enable" : "dots"}></span>
        <span className={2 === current ? "dots enable" : "dots"}></span>
        <span className={3 === current ? "dots enable" : "dots"}></span>
      </div>
    </>
  );
};

export { Carousel };
