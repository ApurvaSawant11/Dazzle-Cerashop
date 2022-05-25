import React, { useEffect } from "react";
import "./productFilterBar.css";
import { useData } from "../../context";
// import { useEffect } from "react/cjs/react.production.min";

const RATING_STARS = [4, 3, 2, 1];
const SORT_HIGH_LOW = [
  { sortText: "Low to High", sortType: "LOW_TO_HIGH" },
  { sortText: "High to Low", sortType: "HIGH_TO_LOW" },
];

const ProductFilterBar = ({ mobileFilter, setMobileFilter }) => {
  const {
    setIsLoaderActive,
    sortByHighLow,
    priceRange,
    sliderValue,
    sortByRating,
    productsList,
    categoriesList,
    dispatch,
  } = useData();

  useEffect(() => {
    setIsLoaderActive(true);
    setTimeout(() => setIsLoaderActive(false), 1000);
  }, []);

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
    const priceGap = 500;
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
    <div
      className={`filter-bar pt-0p5 p-2p5 ${
        mobileFilter ? "filter-drawer" : ""
      } `}
    >
      <div className="text-right mt-1 button-link">
        <i className="fas fa-times" onClick={() => setMobileFilter(false)}></i>
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
            max="5000"
            value={priceRange.min}
            onChange={(e) => onPriceChangeHandler("min", e.target.value, e)}
          />
          <input
            type="range"
            className="range"
            min="0"
            max="5000"
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

      <h6 className="text-uppercase sort-by">Sort by</h6>
      <div className="flex-gap sort-by">
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

      <button
        className="button primary radius-0 add-filter-btn mt-2"
        onClick={() => setMobileFilter(false)}
      >
        Add Filters
      </button>
    </div>
  );
};

export { ProductFilterBar };
