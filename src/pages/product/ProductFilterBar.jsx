import React, { useState } from "react";
import "./productFilterBar.css";
import { useData } from "../../context";

const RATING_STARS = [1, 2, 3, 4];
const SORT_HIGH_LOW = [
  { sortText: "Low to High", sortType: "LOW_TO_HIGH" },
  { sortText: "High to Low", sortType: "HIGH_TO_LOW" },
];

const ProductFilterBar = () => {
  const {
    sortByHighLow,
    priceRange,
    sliderValue,
    sortByRating,
    productsList,
    categoriesList,
    dispatch,
  } = useData();

  const changeHandler = (dispatchType, targetValue, e) => {
    dispatch({
      type: dispatchType,
      payload:
        dispatchType === "CATEGORY"
          ? { [targetValue]: e.target.checked }
          : targetValue,
    });
  };

  const isSortByRating = (star) => sortByRating && sortByRating === star;
  const isSortByPrice = (type) => sortByHighLow && sortByHighLow === type;

  const onPriceChangeHandler = (type, value, e) => {
    const priceGap = 1000;
    if (type === "min") {
      if (priceRange.max - value >= priceGap) {
        priceRange.min = value;
      }
    } else {
      if (value - priceRange.min >= priceGap) {
        priceRange.max = value;
      }
    }
    changeHandler("PRICE_RANGE", priceRange, e);
  };

  return (
    <div className="filter-bar pt-0p5 p-2p5">
      <div className="text-right mt-1 button-link">
        <i className="fa-solid fa-x"></i>
      </div>
      <div className="filter-header text-uppercase border-bottom-1 pb-0p5 flex-row items-center wrap">
        <h5>Filters</h5>
        <button
          className="plain-button secondary-text underline clear-filter-btn"
          onClick={() => changeHandler("CLEAR_FILTER", productsList)}
        >
          Clear All
        </button>
      </div>

      <h6 className="text-uppercase">Price</h6>
      <div className="price-range mt-2">
        <div className="range-group">
          <input
            type="range"
            className="range"
            min="0"
            max="19999"
            value={priceRange.min}
            onChange={(e) => onPriceChangeHandler("min", e.target.value, e)}
          />
          <input
            type="range"
            className="range"
            min="0"
            max="19999"
            value={priceRange.max}
            onChange={(e) => onPriceChangeHandler("max", e.target.value, e)}
          />
          <div className="slider">
            <div
              className="progress"
              style={{
                left: `${sliderValue.left}%`,
                right: `${sliderValue.right}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="input-group mt-1">
          <span>₹{priceRange.min}</span>
          <span>₹{priceRange.max}</span>
        </div>
      </div>

      <h6 className="text-uppercase">Categories</h6>
      {Object.entries(categoriesList).map((item) => {
        const [catName, isCatChecked] = item;
        return (
          <label key={item} className="checkbox-container">
            <input
              type="checkbox"
              className="checkbox-field"
              checked={isCatChecked}
              onChange={(e) => changeHandler("CATEGORY", catName, e)}
            />{" "}
            {catName}
          </label>
        );
      })}

      <h6 className="text-uppercase">Rating</h6>
      {RATING_STARS.map((star) => (
        <label key={star} className="radio-container">
          <input
            type="radio"
            name="radio"
            className="radio-field"
            value=""
            checked={isSortByRating(star)}
            onChange={() => {
              changeHandler("SORT_BY_RATING", star);
            }}
          />{" "}
          {star} Stars & Above
        </label>
      ))}

      <h6 className="text-uppercase">Sort by</h6>
      <div className="flex-gap">
        {SORT_HIGH_LOW.map(({ sortText, sortType }, index) => (
          <label key={index} className="radio-container">
            <input
              type="radio"
              name="radio-sort"
              className="radio-field"
              checked={isSortByPrice(sortType)}
              onChange={() => changeHandler("SORT_BY_HIGH_LOW", sortType)}
            />{" "}
            Price - {sortText}
          </label>
        ))}
      </div>
    </div>
  );
};

export { ProductFilterBar };