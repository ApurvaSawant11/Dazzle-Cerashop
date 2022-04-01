import React from "react";
import { useData } from "../../context";
import { ProductCard } from "../../components";
import { ProductFilterBar } from "./ProductFilterBar";
import { filterByCategory, sortData, searchProduct } from "../../utils";

const Products = () => {
  const {
    categoriesList,
    productsList: data,
    sortByHighLow,
    priceRange,
    sortByRating,
    search,
  } = useData();

  const searchedData = searchProduct([...data], search);
  const filteredData = filterByCategory([...searchedData], categoriesList);
  const sortedData = sortData(
    [...filteredData],
    sortByHighLow,
    priceRange,
    sortByRating
  );

  return (
    <>
      <h4 className="text-center text-uppercase p-1">
        Products
        <span className="fw-500 text-xs">({sortedData.length} products)</span>
      </h4>

      <div className="product-container border-bottom-1 my-3">
        <ProductFilterBar />

        <div className="grid-container border-left-1 p-2">
          {sortedData.length > 0 ? (
            sortedData.map((product) => (
              <ProductCard key={product._id} productDetails={product} />
            ))
          ) : (
            <h4>
              Sorry! Could not find any products 😓. Try different set of
              filters
            </h4>
          )}
        </div>
      </div>
    </>
  );
};

export { Products };
