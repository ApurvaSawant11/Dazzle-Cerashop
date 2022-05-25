import { Server, Model, RestSerializer } from "miragejs";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import {
  getAddressHandler,
  addAddressHandler,
  removeAddressHandler,
  updateAddressHandler,
} from "./backend/controllers/AddressController";
import {
  addItemToCartHandler,
  getCartItemsHandler,
  removeItemFromCartHandler,
  updateCartItemHandler,
} from "./backend/controllers/CartController";
import {
  getAllCategoriesHandler,
  getCategoryHandler,
} from "./backend/controllers/CategoryController";
import {
  getAllProductsHandler,
  getProductHandler,
} from "./backend/controllers/ProductController";
import {
  addItemToWishlistHandler,
  getWishlistItemsHandler,
  removeItemFromWishlistHandler,
} from "./backend/controllers/WishlistController";
import { categories } from "./backend/db/categories";
import { products } from "./backend/db/products";
import { users } from "./backend/db/users";
import { v4 as uuid } from "uuid";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      product: Model,
      category: Model,
      user: Model,
      cart: Model,
      wishlist: Model,
      address: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      // disballing console logs from Mirage
      server.logging = false;
      products.forEach((item) => {
        server.create("product", { ...item });
      });

      users.forEach((item) =>
        server.create("user", {
          ...item,
          cart: [],
          wishlist: [],
          address: [
            {
              _id: "27d94942-cd9b-4137-a0bd-39296b8a6bd2",
              name: "Apurva Sawant",
              street:
                "Shop No. 3 and 4, Sohrab Hall, Opp. Jehangir Hospital, Mahatma Gandhi Rd, Camp",
              city: "Pune",
              state: "Maharashtra",
              country: "India",
              zipCode: "411001",
              mobile: "9800980098",
            },
          ],
        })
      );

      categories.forEach((item) => server.create("category", { ...item }));
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // products routes (public)
      this.get("/products", getAllProductsHandler.bind(this));
      this.get("/products/:productId", getProductHandler.bind(this));

      // categories routes (public)
      this.get("/categories", getAllCategoriesHandler.bind(this));
      this.get("/categories/:categoryId", getCategoryHandler.bind(this));

      // cart routes (private)
      this.get("/user/cart", getCartItemsHandler.bind(this));
      this.post("/user/cart", addItemToCartHandler.bind(this));
      this.post("/user/cart/:productId", updateCartItemHandler.bind(this));
      this.delete(
        "/user/cart/:productId",
        removeItemFromCartHandler.bind(this)
      );

      // wishlist routes (private)
      this.get("/user/wishlist", getWishlistItemsHandler.bind(this));
      this.post("/user/wishlist", addItemToWishlistHandler.bind(this));
      this.delete(
        "/user/wishlist/:productId",
        removeItemFromWishlistHandler.bind(this)
      );

      // address routes (private)
      this.get("/user/address", getAddressHandler.bind(this));
      this.post("/user/address", addAddressHandler.bind(this));
      this.post("/user/address/:addressId", updateAddressHandler.bind(this));
      this.delete("/user/address/:addressId", removeAddressHandler.bind(this));
    },
  });
}
