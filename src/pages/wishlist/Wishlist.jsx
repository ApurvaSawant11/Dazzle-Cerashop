import React from "react";
import { Link } from "react-router-dom";
import { WishlistCard } from "../../components";
import { useCart, useWishlist } from "../../context";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const Wishlist = () => {
  useDocumentTitle("My Wishlist");
  const { wishlist, wishlistDispatch } = useWishlist();
  const { cartList } = useCart();

  return (
    <div>
      <h4 className="text-center text-uppercase p-1">My Wishlist</h4>
      <div className="grid-container p-3 pt-0">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <WishlistCard
              key={product._id}
              productDetails={product}
              dispatch={wishlistDispatch}
              cart={cartList}
            />
          ))
        ) : (
          <h4>
            Oops! Your wishlist is empty! 😓. Add product to your wishlist from{" "}
            <Link to="/products" className="secondary-text">
              HERE
            </Link>
          </h4>
        )}
      </div>
    </div>
  );
};

export { Wishlist };
