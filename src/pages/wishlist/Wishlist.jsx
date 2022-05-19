import React from "react";
import { Link } from "react-router-dom";
import { WishlistCard } from "../../components";
import { useCart, useWishlist } from "../../context";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { emptyWishlist } from "../../assets";
import { useScrollToTop } from "../../hooks";

const Wishlist = () => {
  useDocumentTitle("My Wishlist");
  useScrollToTop();
  const { wishlist, wishlistDispatch } = useWishlist();
  const { cartList } = useCart();

  return (
    <div>
      {wishlist.length > 0 ? (
        <>
          <h4 className="text-center text-uppercase p-1">My Wishlist</h4>
          <div className="grid-container p-3 pt-0">
            {wishlist.map((product) => (
              <WishlistCard
                key={product._id}
                productDetails={product}
                dispatch={wishlistDispatch}
                cart={cartList}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="flex-row-center image-container">
          <div className="empty-page-text">
            <h5>Oops! Your wishlist looks empty! 😓</h5>
            <h6>
              Add products to your wishlist from{" "}
              <Link
                to="/products"
                className="secondary-text primary-bg py-0 p-0p5"
              >
                HERE
              </Link>
            </h6>
          </div>

          <img
            className="empty-page-image"
            loading="lazy"
            src={emptyWishlist}
            alt="empty wishlist"
          />
        </div>
      )}
    </div>
  );
};

export { Wishlist };
