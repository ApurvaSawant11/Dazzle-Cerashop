import "./pagination.css";
import React, { useState, useEffect } from "react";

const Pagination = ({ sortedData, ProductCard, dataLimit }) => {
  const pages = Math.ceil(sortedData.length / dataLimit);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [sortedData]);

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return sortedData.slice(startIndex, endIndex);
  };

  const getPageNumbersGroup = () => {
    return new Array(pages).fill().map((_, index) => index + 1);
  };

  return (
    <div className="grid-container border-left-1 p-2">
      {getPaginatedData().map((product) => (
        <ProductCard key={product._id} productDetails={product} />
      ))}

      <div className="pagination-container flex-row-center">
        <button
          onClick={() => setCurrentPage((page) => page - 1)}
          className={`plain-button secondary-text pr-0p5 ${
            currentPage === 1 ? "disabled" : ""
          }`}
        >
          Prev
        </button>

        {getPageNumbersGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`plain-button page-button ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((page) => page + 1)}
          className={`plain-button secondary-text pl-0p5 ${
            currentPage === pages ? "disabled" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export { Pagination };
