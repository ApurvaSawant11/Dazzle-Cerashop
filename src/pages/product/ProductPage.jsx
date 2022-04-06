import React, { useState } from "react";
import "./productPage.css";
import { useNavigate, useParams } from "react-router";
import { useAuth, useCart, useData, useWishlist } from "../../context";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { isProductInCart, isProductInWishlist } from "../../utils";
import { toast } from "react-toastify";

const ProductPage = () => {
  useDocumentTitle("Product");
  const RATING_STARS = [1, 2, 3, 4, 5];
  const [productQty, setProductQty] = useState(1);
  const { productId } = useParams();
  const { productsList } = useData();
  const { wishlist, removeFromWishlist, addToWishlist, wishlistDispatch } =
    useWishlist();
  const { cartList, addToCart, cartDispatch } = useCart();

  const navigate = useNavigate();
  const { token } = useAuth();

  const product = productsList?.find((product) => {
    return product._id === productId;
  });

  const isInCart = isProductInCart(cartList, product?._id);
  const isInWishlist = isProductInWishlist(wishlist, product?._id);

  const cartHandler = () => {
    token
      ? isInCart
        ? navigate("/cart")
        : addToCart(cartDispatch, product, token, toast)
      : navigate("/login");
  };

  const wishlistHandler = () => {
    token
      ? isInWishlist
        ? removeFromWishlist(product?._id, wishlistDispatch, token, toast)
        : addToWishlist(wishlistDispatch, product, token, toast)
      : navigate("/login");
  };
  return (
    <section className="flex-row-center items-start wrap mt-2p5 mb-4 product-section">
      <img src={product?.imgURL} alt={product?.title} />
      <div className="product-form">
        <div className="product-header flex-row-center">
          <h5 className="text-uppercase">{product?.title}</h5>
          <span>
            <i className="fas fa-share-alt fa-lg button-link"></i>
          </span>
        </div>

        <div className="pb-0p5">
          Rating:{" "}
          {RATING_STARS.map((star, index) => (
            <i
              key={index}
              className={`rating-icon rating-icon--star fa fa-star fw-500 ${
                product?.rating >= star ? "fw-900" : ""
              }`}
            ></i>
          ))}
        </div>

        <div className="flex-row">
          <span className="discountedPrice text-md">
            Rs. {product?.price.discounted}
          </span>
          <span className="originalPrice pl-0p5">
            Rs. {product?.price.original}
          </span>
        </div>

        <p className="dark-gray-text text-capitalize border-top-1 pt-2 pb-1">
          Prices are inclusive of taxes. Free shipping on prepaid orders.
        </p>
        <div className="quantity-selector">
          <button
            className="quantity-btn"
            onClick={() => productQty > 1 && setProductQty(productQty - 1)}
          >
            -
          </button>
          <span className="quantity-input">{productQty}</span>
          <button
            className="quantity-btn"
            onClick={() => setProductQty(productQty + 1)}
          >
            +
          </button>
        </div>
        <button
          type="submit"
          className="button primary radius-0 mt-2 cta-cart-btn"
          onClick={cartHandler}
        >
          {isInCart ? "Go to Cart" : "Add to Cart"}
        </button>
        <button
          className="button inverted-primary radius-0 mt-1p5 cta-wishlist-btn"
          onClick={wishlistHandler}
        >
          {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>

        <div>
          <p className="mt-1">
            <i className="fas fa-rupee-sign"></i> Pay on delivery available
          </p>
          <p>
            <i className="fas fa-exchange-alt"></i> Easy 14 days exchange &
            return available
          </p>
        </div>
      </div>
    </section>
  );
};

export { ProductPage };
