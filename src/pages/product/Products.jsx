import React, { useState } from "react";
import { useData } from "../../context";
import { ProductCard } from "../../components";
import { ProductFilterBar } from "./ProductFilterBar";
import { filterByCategory, sortData, searchProduct } from "../../utils";
import { useDocumentTitle, useScrollToTop } from "../../hooks";
import { Pagination } from "../../components/pagination/Pagination";

const Products = () => {
  useDocumentTitle("Products");
  useScrollToTop();
  const [mobileFilter, setMobileFilter] = useState(false);
  const [mobileSort, setMobileSort] = useState(false);
  const SORT_HIGH_LOW = [
    { sortText: "Low to High", sortType: "LOW_TO_HIGH" },
    { sortText: "High to Low", sortType: "HIGH_TO_LOW" },
  ];

  const {
    categoriesList,
    productsList: data,
    sortByHighLow,
    priceRange,
    sortByRating,
    search,
    dispatch,
  } = useData();

  const searchedData = searchProduct([...data], search);
  const filteredData = filterByCategory([...searchedData], categoriesList);
  const sortedData = sortData(
    [...filteredData],
    sortByHighLow,
    priceRange,
    sortByRating
  );

  const isSortByPrice = (type) => sortByHighLow && sortByHighLow === type;
  const changeHandler = (dispatchType, targetValue) => {
    dispatch({
      type: dispatchType,
      payload: targetValue,
    });
  };

  return (
    <>
      <h4 className="text-center text-uppercase p-1">
        Products
        <span className="fw-500 text-xs">({sortedData.length} products)</span>
      </h4>

      <div className="short-filter-container">
        <div className="short-filter-bar border-top-1">
          <span
            className="button-link p-1 pl-2p5 border-right-1 filter-btn"
            onClick={() => setMobileFilter(true)}
          >
            <i className="fas fa-filter"></i> Filter
          </span>
          <span
            className="button-link p-1 pr-2p5 border-left-1 sort-btn"
            onClick={() => setMobileSort(!mobileSort)}
          >
            <i className="fas fa-sort"></i> Sort
          </span>
          <div
            className={`dropdown-content border-1 ${
              mobileSort ? "" : "show-none"
            }`}
          >
            {SORT_HIGH_LOW.map(({ sortText, sortType }, index) => (
              <label key={index} className="radio-container">
                <input
                  type="radio"
                  name="mobile-radio-sort"
                  className="radio-field"
                  checked={isSortByPrice(sortType)}
                  onChange={() => changeHandler("SORT_BY_HIGH_LOW", sortType)}
                />{" "}
                Price - {sortText}
              </label>
            ))}
            <div
              className="text-xs text-center danger-text clear-sort-btn"
              onClick={() => {
                changeHandler("CLEAR_SORT_HIGH_LOW");
                setMobileSort(false);
              }}
            >
              Clear Sort
            </div>
          </div>
        </div>
      </div>

      <div className="product-container border-bottom-1 mb-4">
        <ProductFilterBar
          mobileFilter={mobileFilter}
          setMobileFilter={setMobileFilter}
        />

        {sortedData.length > 0 ? (
          <Pagination
            sortedData={sortedData}
            ProductCard={ProductCard}
            dataLimit={8}
          />
        ) : (
          <h4>
            Sorry! Could not find any products 😓. Try different set of filters
          </h4>
        )}
      </div>
    </>
  );
};

export { Products };
